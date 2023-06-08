package io.slingr.endpoint.microsoft.sharepoint;

import io.slingr.endpoints.HttpPerUserEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.exchange.ReservedName;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import io.slingr.endpoints.ws.exchange.WebServiceResponse;
import org.apache.commons.lang.StringUtils;
import org.apache.http.entity.ContentType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * <p>SharePoint endpoint
 *
 * <p>Created by agreggio on 05/06/23.
 */
@SlingrEndpoint(name = "sharepoint", functionPrefix = "_")
public class MicrosoftSharePointEndpoint extends HttpPerUserEndpoint {
    private static final Logger logger = LoggerFactory.getLogger(MicrosoftSharePointEndpoint.class);

    @ApplicationLogger
    private AppLogs appLogger;

    @EndpointProperty
    private String clientId;

    @EndpointProperty
    private String tenantId;

    @EndpointProperty
    private String clientSecret;

    private String refreshToken;

    @Override
    public String getApiUri() {
        return "https://graph.microsoft.com";
    }


    @Override
    public void endpointStarted() {
        httpService().setAllowExternalUrl(true);
    }

    // Internal methods
    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) {
        try {
            setRequestHeaders(request);
            return defaultGetRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                refreshAccessToken(request);
                return defaultGetRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        try {
            setRequestHeaders(request);
            return defaultPostRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                refreshAccessToken(request);
                return defaultPostRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_put")
    public Json put(FunctionRequest request) {
        try {
            setRequestHeaders(request);
            return defaultPutRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                refreshAccessToken(request);
                return defaultPutRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_patch")
    public Json patch(FunctionRequest request) {
        try {
            setRequestHeaders(request);
            return defaultPatchRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                refreshAccessToken(request);
                return defaultPatchRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_delete")
    public Json delete(FunctionRequest request) {
        try {
            setRequestHeaders(request);
            return defaultDeleteRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                refreshAccessToken(request);
                return defaultDeleteRequest(request);
            }
            throw restException;
        }
    }

    @EndpointWebService(path = "authCallback")
    public WebServiceResponse authCallback() {
        return new WebServiceResponse("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n" +
                "<html>\n" +
                "<head>\n" +
                "<title>Sharepoint authentication</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "</body>\n" +
                "</html>", ContentType.TEXT_HTML.toString());
    }

    @EndpointFunction(name = ReservedName.CONNECT_USER)
    public Json connectUser(FunctionRequest request) {
        final String userId = request.getUserId();
        if (StringUtils.isNotBlank(userId)) {
            // checks if the user includes a non-empty 'code' on the request
            final Json jsonBody = request.getJsonParams();
            if (jsonBody != null && StringUtils.isNotBlank(jsonBody.string("code"))) {
                String code = jsonBody.string("code");
                Json accessTokenRequest = Json.map()
                        .set("path", "https://login.microsoftonline.com/" + tenantId + "/oauth2/v2.0/token")
                        .set("headers", Json.map().set("Accept", "application/json")
                                .set("Content-Type", "application/x-www-form-urlencoded"))
                        .set("body", Json.map()
                                .set("client_id", clientId)
                                .set("client_secret", clientSecret)
                                .set("code", code)
                                .set("redirect_uri", jsonBody.string("redirectUri"))
                                .set("grant_type", "authorization_code")
                        );
                Json res = httpService().defaultPostRequest(accessTokenRequest);
                if (res.contains("access_token")) {
                    // saves the information on the users data store
                    Json conf = users().save(userId, res);
                    logger.info(String.format("User connected [%s] [%s]", userId, conf.toString()));

                    // sends connected user event
                    users().sendUserConnectedEvent(request.getFunctionId(), userId, conf);

                    return conf;
                } else {
                    logger.warn(String.format("Problems trying to connect user [%s] to SharePoint: %s", userId, res.toString()));
                    appLogger.warn(String.format("Problems trying to connect user [%s] to SharePoint: %s", userId, res.string("error")));
                }
            } else {
                logger.info(String.format("Empty 'code' when try to connect user [%s] [%s]", userId, request.toString()));
            }
        }
        defaultMethodDisconnectUsers(request);
        return Json.map();
    }

    private void setRequestHeaders(FunctionRequest request) {
        Json body = request.getJsonParams();
        Json headers = body.json("headers");
        if (headers == null) {
            headers = Json.map();
        }
        String token;
        Json userConfig = users().findById(request.getUserId());
        if (userConfig != null && !userConfig.isEmpty("access_token")) {
            token = userConfig.string("access_token");
            headers.set("Authorization", "Bearer " + token);
            logger.info("Request using user token");
        }

        headers.set("Content-Type", "application/json");
        body.set("headers", headers);
        request.getRequest().set("params", body);
    }


    private boolean checkInvalidTokenError(Exception e) {
        if (e instanceof EndpointException) {
            EndpointException restException = (EndpointException) e;
            if (restException.getCode() != null) {
                System.out.println(restException.getReturnCode());
            }
            return restException.getReturnCode() == 401;
        }
        return false;
    }

    private void refreshAccessToken(FunctionRequest request) {
        final String userId = request.getUserId();
        Json userConfig = users().findById(userId);
        if (userConfig != null && !userConfig.isEmpty("access_token")) {
            // checks if the user includes a non-empty 'code' on the request
                String refresh_token = userConfig.string("refresh_token");
                Json accessTokenRequest = Json.map()
                        .set("path", "https://login.microsoftonline.com/" + tenantId + "/oauth2/v2.0/token")
                        .set("headers", Json.map().set("Accept", "application/json")
                                .set("Content-Type", "application/x-www-form-urlencoded"))
                        .set("body", Json.map()
                                .set("client_id", clientId)
                                .set("client_secret", clientSecret)
                                .set("redirect_uri", userConfig.string("redirectUri"))
                                .set("grant_type", "refresh_token")
                                .set("refresh_token", refresh_token)
                        );
                Json res = httpService().defaultPostRequest(accessTokenRequest);
                if (res.contains("access_token")) {
                    // saves the information on the users data store
                    Json conf = users().save(userId, res);
                    logger.info(String.format("User connected [%s] [%s]", userId, conf.toString()));

                    // sends connected user event
                    users().sendUserConnectedEvent(request.getFunctionId(), userId, conf);

                    setRequestHeaders(request);

                } else {
                    logger.warn(String.format("Problems trying to connect user [%s] to SharePoint: %s", userId, res.toString()));
                    appLogger.warn(String.format("Problems trying to connect user [%s] to SharePoint: %s", userId, res.string("error")));
                }

        }else{
            defaultMethodDisconnectUsers(request);
        }

    }

}
