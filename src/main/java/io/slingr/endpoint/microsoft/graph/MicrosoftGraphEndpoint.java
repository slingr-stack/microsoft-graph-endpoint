package io.slingr.endpoint.microsoft.graph;

import io.slingr.endpoints.Endpoint;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Random;

/**
 * <p>Sample endpoint
 *
 * <p>Created by lefunes on 01/12/16.
 */
@SlingrEndpoint(name = "microsoft-graph")
public class MicrosoftGraphEndpoint extends Endpoint {
    private static final Logger logger = LoggerFactory.getLogger(MicrosoftGraphEndpoint.class);

    @ApplicationLogger
    private AppLogs appLogger;

    @EndpointProperty
    private String token;

    private final Random random = new Random();

    public MicrosoftGraphEndpoint() {
    }

}
