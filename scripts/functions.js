////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.sites = {};

endpoint.sites.permissions = {};

endpoint.sites.lists = {};

endpoint.me = {};

endpoint.me.followedSites = {};

endpoint.users = {};

endpoint.users.followedSites = {};

endpoint.users.followedSites.add = {};

endpoint.users.followedSites.remove = {};

endpoint.sites.columns = {};

endpoint.sites.contentTypes = {};

endpoint.sites.getApplicableContentTypesForList = {};

endpoint.sites.sites = {};

endpoint.sites.operations = {};

endpoint.sites.getAllSites = {};

endpoint.sites.lists.items = {};

endpoint.sites.lists.columns = {};

endpoint.sites.lists.contentTypes = {};

endpoint.sites.lists.contentTypes.addCopy = {};

endpoint.sites.lists.operations = {};

endpoint.sites.contentTypes.columns = {};

endpoint.sites.lists.contentTypes.columns = {};

endpoint.sites.contentTypes.isPublished = {};

endpoint.sites.contentTypes.publish = {};

endpoint.sites.contentTypes.unpublish = {};

endpoint.sites.lists.contentTypes.addCopyFromContentTypeHub = {};

endpoint.sites.contentTypes.addCopyFromContentTypeHub = {};

endpoint.sites.contentTypes.associateWithHubSites = {};

endpoint.sites.contentTypes.copyToDefaultContentLocation = {};

endpoint.sites.lists.contentTypes.column = {};

endpoint.sites.lists.contentTypes.getCompatibleHubContentTypes = {};

endpoint.sites.contentTypes.getCompatibleHubContentTypes = {};

endpoint.sites.lists.items.fields = {};

endpoint.sites.items = {};

endpoint.sites.items.versions = {};

endpoint.sites.lists.items.versions = {};

endpoint.sites.analytics = {};

endpoint.sites.analytics.allTime = {};

endpoint.sites.lists.items.analytics = {};

endpoint.sites.lists.items.analytics.allTime = {};

endpoint.drives = {};

endpoint.drives.items = {};

endpoint.drives.items.analytics = {};

endpoint.drives.items.analytics.lastSevenDays = {};

endpoint.sites.analytics.lastSevenDays = {};

endpoint.sites.lists.items.analytics.lastSevenDays = {};

endpoint.sites.lists.items.documentSetVersions = {};

endpoint.sites.lists.items.documentSetVersions.restore = {};

endpoint.sites.termStore = {};

endpoint.sites.termStore.groups = {};

endpoint.sites.termStore.groups.sets = {};

endpoint.sites.termStore.sets = {};

endpoint.sites.termStore.sets.children = {};

endpoint.sites.termStore.sets.terms = {};

endpoint.sites.termStore.sets.terms.children = {};

endpoint.sites.termStore.groups.sets.terms = {};

endpoint.sites.termStore.sets.relations = {};

endpoint.sites.termStore.sets.terms.relations = {};

endpoint.admin = {};

endpoint.admin.sharepoint = {};

endpoint.admin.sharepoint.settings = {};

endpoint.sites.permissions.get = function(sitesId, permissionId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/v1.0/sites/:sitesId/permissions/:permissionId', [sitesId, permissionId]);
			break;
		case 1:
			url = parse('/v1.0/sites/:sitesId/permissions', [sitesId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sites.permissions.post = function(sitesId, httpOptions) {
    if (!sitesId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [sitesId].');
        return;
    }
    var url = parse('/v1.0/sites/:sitesId/permissions', [sitesId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.permissions.patch = function(sitesId, permissionId, httpOptions) {
    if (!sitesId || !permissionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [sitesId,permissionId].');
        return;
    }
    var url = parse('/v1.0/sites/:sitesId/permissions/:permissionId', [sitesId, permissionId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.get = function(hostname, siteRelativePath, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/v1.0/sites/:hostname/:site-relative-path', [hostname, siteRelativePath]);
			break;
		case 0:
			url = parse('/v1.0/sites');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sites.lists.get = function(siteId, listId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/v1.0/sites/:site-id/lists', [siteId]);
			break;
		case 2:
			url = parse('/v1.0/sites/:site-id/lists/:list-id', [siteId, listId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.me.followedSites.get = function(httpOptions) {
    var url = parse('/v1.0/me/followedSites');
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.users.followedSites.add.post = function(userId, httpOptions) {
    if (!userId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userId].');
        return;
    }
    var url = parse('/v1.0/users/:user-id/followedSites/add', [userId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.users.followedSites.remove.post = function(userId, httpOptions) {
    if (!userId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userId].');
        return;
    }
    var url = parse('/v1.0/users/:user-id/followedSites/remove', [userId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.columns.get = function(siteId, columnId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/v1.0/sites/:site-id/columns', [siteId]);
			break;
		case 2:
			url = parse('/v1.0/sites/:site-id/columns/:column-id', [siteId, columnId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sites.columns.post = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/columns', [siteId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.contentTypes.get = function(siteId, contentTypeId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/v1.0/sites/:site-id/contentTypes', [siteId]);
			break;
		case 2:
			url = parse('/v1.0/sites/:site-id/contentTypes/:contentType-id', [siteId, contentTypeId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sites.contentTypes.post = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/contentTypes', [siteId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.getApplicableContentTypesForList.get = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/getApplicableContentTypesForList', [siteId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.lists.post = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists', [siteId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.sites.get = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/sites', [siteId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.operations.get = function(siteId, richLongRunningOperationID, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/v1.0/sites/:siteId/operations', [siteId]);
			break;
		case 2:
			url = parse('/v1.0/sites/:siteId/operations/:richLongRunningOperation-ID', [siteId, richLongRunningOperationID]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sites.getAllSites.get = function(httpOptions) {
    var url = parse('/v1.0/sites/getAllSites');
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.lists.items.get = function(siteId, listId, itemId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/v1.0/sites/:site-id/lists/:list-id/items', [siteId, listId]);
			break;
		case 3:
			url = parse('/v1.0/sites/:site-id/lists/:list-id/items/:item-id', [siteId, listId, itemId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sites.lists.columns.get = function(siteId, listId, columnId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/v1.0/sites/:site-id/lists/:list-id/columns', [siteId, listId]);
			break;
		case 3:
			url = parse('/v1.0/sites/:site-id/lists/:list-id/columns/:column-id', [siteId, listId, columnId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sites.lists.columns.post = function(siteId, listId, httpOptions) {
    if (!siteId || !listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/columns', [siteId, listId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.lists.contentTypes.get = function(siteId, listId, contentTypeId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes', [siteId, listId]);
			break;
		case 3:
			url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id', [siteId, listId, contentTypeId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sites.lists.contentTypes.addCopy.post = function(siteId, listId, httpOptions) {
    if (!siteId || !listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/addCopy', [siteId, listId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.lists.operations.get = function(siteId, listId, richLongRunningOperationID, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/v1.0/sites/:siteId/lists/:listId/operations', [siteId, listId]);
			break;
		case 3:
			url = parse('/v1.0/sites/:siteId/lists/:listId/operations/:richLongRunningOperation-ID', [siteId, listId, richLongRunningOperationID]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sites.contentTypes.columns.get = function(siteId, contentTypeId, columnId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 3:
			url = parse('/v1.0/sites/:site-id/contentTypes/:contentType-id/columns/:column-id', [siteId, contentTypeId, columnId]);
			break;
		case 2:
			url = parse('/v1.0/sites/:site-id/contentTypes/:contentType-id/columns', [siteId, contentTypeId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sites.lists.contentTypes.columns.get = function(siteId, listId, contentTypeId, columnId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 4:
			url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/columns/:column-id', [siteId, listId, contentTypeId, columnId]);
			break;
		case 3:
			url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/columns', [siteId, listId, contentTypeId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sites.columns.patch = function(siteId, columnId, httpOptions) {
    if (!siteId || !columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,columnId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/columns/:column-id', [siteId, columnId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.lists.columns.patch = function(siteId, listId, columnId, httpOptions) {
    if (!siteId || !listId || !columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,columnId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/columns/:column-id', [siteId, listId, columnId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.contentTypes.columns.patch = function(siteId, contentTypeId, columnId, httpOptions) {
    if (!siteId || !contentTypeId || !columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId,columnId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/contentTypes/:contentType-id/columns/:column-id', [siteId, contentTypeId, columnId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.lists.contentTypes.columns.patch = function(siteId, listId, contentTypeId, columnId, httpOptions) {
    if (!siteId || !listId || !contentTypeId || !columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,contentTypeId,columnId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/columns/:column-id', [siteId, listId, contentTypeId, columnId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.columns.delete = function(siteId, columnId, httpOptions) {
    if (!siteId || !columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,columnId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/columns/:column-id', [siteId, columnId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sites.lists.columns.delete = function(siteId, listId, columnId, httpOptions) {
    if (!siteId || !listId || !columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,columnId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/columns/:column-id', [siteId, listId, columnId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sites.contentTypes.columns.delete = function(siteId, contentTypeId, columnId, httpOptions) {
    if (!siteId || !contentTypeId || !columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId,columnId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/contentTypes/:contentType-id/columns/:column-id', [siteId, contentTypeId, columnId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sites.lists.contentTypes.columns.delete = function(siteId, listId, contentTypeId, columnId, httpOptions) {
    if (!siteId || !listId || !contentTypeId || !columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,contentTypeId,columnId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/columns/:column-id', [siteId, listId, contentTypeId, columnId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sites.contentTypes.patch = function(siteId, contentTypeId, httpOptions) {
    if (!siteId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/contentTypes/:contentType-id', [siteId, contentTypeId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.lists.contentTypes.patch = function(siteId, listId, contentTypeId, httpOptions) {
    if (!siteId || !listId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id', [siteId, listId, contentTypeId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.contentTypes.delete = function(siteId, contentTypeId, httpOptions) {
    if (!siteId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/contentTypes/:contentType-id', [siteId, contentTypeId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sites.lists.contentTypes.delete = function(siteId, listId, contentTypeId, httpOptions) {
    if (!siteId || !listId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id', [siteId, listId, contentTypeId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sites.contentTypes.isPublished.get = function(siteId, contentTypeId, httpOptions) {
    if (!siteId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/contentTypes/:contentTypeId/isPublished', [siteId, contentTypeId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.contentTypes.publish.post = function(siteId, contentTypeId, httpOptions) {
    if (!siteId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/contentTypes/:contentTypeId/publish', [siteId, contentTypeId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.contentTypes.unpublish.post = function(siteId, contentTypeId, httpOptions) {
    if (!siteId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/contentTypes/:contentTypeId/unpublish', [siteId, contentTypeId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.lists.contentTypes.addCopyFromContentTypeHub.post = function(siteId, listId, httpOptions) {
    if (!siteId || !listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/lists/:listId/contentTypes/addCopyFromContentTypeHub', [siteId, listId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.contentTypes.addCopyFromContentTypeHub.post = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/contentTypes/addCopyFromContentTypeHub', [siteId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.contentTypes.associateWithHubSites.post = function(siteId, contentTypeId, httpOptions) {
    if (!siteId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/contentTypes/:contentTypeId/associateWithHubSites', [siteId, contentTypeId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.contentTypes.copyToDefaultContentLocation.post = function(siteId, contentTypeId, httpOptions) {
    if (!siteId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/contentTypes/:contentTypeId/copyToDefaultContentLocation', [siteId, contentTypeId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.contentTypes.columns.post = function(siteId, contentTypeId, httpOptions) {
    if (!siteId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/contentTypes/:contentType-id/columns', [siteId, contentTypeId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.lists.contentTypes.column.post = function(siteId, listId, contentTypeId, httpOptions) {
    if (!siteId || !listId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/column', [siteId, listId, contentTypeId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.lists.contentTypes.getCompatibleHubContentTypes.get = function(siteId, listId, httpOptions) {
    if (!siteId || !listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/lists/:listId/contentTypes/getCompatibleHubContentTypes', [siteId, listId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.contentTypes.getCompatibleHubContentTypes.get = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/contentTypes/getCompatibleHubContentTypes', [siteId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.lists.items.post = function(siteId, listId, httpOptions) {
    if (!siteId || !listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/items', [siteId, listId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.lists.items.patch = function(siteId, listId, itemId, httpOptions) {
    if (!siteId || !listId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/items/:item-id', [siteId, listId, itemId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.lists.items.fields.patch = function(siteId, listId, itemId, httpOptions) {
    if (!siteId || !listId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/items/:item-id/fields', [siteId, listId, itemId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.lists.items.delete = function(siteId, listId, itemId, httpOptions) {
    if (!siteId || !listId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/items/:item-id', [siteId, listId, itemId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sites.items.versions.get = function(siteId, itemId, httpOptions) {
    if (!siteId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,itemId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/items/:item-id/versions', [siteId, itemId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.lists.items.versions.get = function(siteId, listId, itemId, httpOptions) {
    if (!siteId || !listId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/items/:item-id/versions', [siteId, listId, itemId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.analytics.allTime.get = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/analytics/allTime', [siteId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.lists.items.analytics.allTime.get = function(siteId, listId, itemId, httpOptions) {
    if (!siteId || !listId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/items/:item-id/analytics/allTime', [siteId, listId, itemId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.drives.items.analytics.lastSevenDays.get = function(driveId, itemId, httpOptions) {
    if (!driveId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [driveId,itemId].');
        return;
    }
    var url = parse('/v1.0/drives/:drive-id/items/:item-id/analytics/lastSevenDays', [driveId, itemId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.analytics.lastSevenDays.get = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/analytics/lastSevenDays', [siteId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.lists.items.analytics.lastSevenDays.get = function(siteId, listId, itemId, httpOptions) {
    if (!siteId || !listId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/items/:item-id/analytics/lastSevenDays', [siteId, listId, itemId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.lists.items.documentSetVersions.get = function(siteId, listId, itemId, documentSetVersionId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 3:
			url = parse('/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions', [siteId, listId, itemId]);
			break;
		case 4:
			url = parse('/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions/:documentSetVersionId', [siteId, listId, itemId, documentSetVersionId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sites.lists.items.documentSetVersions.post = function(siteId, listId, itemId, httpOptions) {
    if (!siteId || !listId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions', [siteId, listId, itemId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.lists.items.documentSetVersions.delete = function(siteId, listId, itemId, documentSetVersionId, httpOptions) {
    if (!siteId || !listId || !itemId || !documentSetVersionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId,documentSetVersionId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions/:documentSetVersionId', [siteId, listId, itemId, documentSetVersionId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sites.lists.items.documentSetVersions.restore.post = function(siteId, listId, itemId, documentSetVersionId, httpOptions) {
    if (!siteId || !listId || !itemId || !documentSetVersionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId,documentSetVersionId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions/:documentSetVersionId/restore', [siteId, listId, itemId, documentSetVersionId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.termStore.get = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore', [siteId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.termStore.patch = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore', [siteId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.termStore.groups.get = function(siteId, groupId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/v1.0/sites/:site-id/termStore/groups', [siteId]);
			break;
		case 2:
			url = parse('/v1.0/sites/:site-id/termStore/groups/:group-id', [siteId, groupId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sites.termStore.groups.post = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/groups', [siteId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.termStore.groups.delete = function(siteId, groupId, httpOptions) {
    if (!siteId || !groupId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,groupId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/groups/:group-id', [siteId, groupId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sites.termStore.groups.sets.get = function(siteId, groupId, httpOptions) {
    if (!siteId || !groupId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,groupId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/groups/:group-id/sets', [siteId, groupId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.termStore.sets.post = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets', [siteId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.termStore.sets.get = function(siteId, setId, httpOptions) {
    if (!siteId || !setId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id', [siteId, setId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.termStore.sets.patch = function(siteId, setId, httpOptions) {
    if (!siteId || !setId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id', [siteId, setId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.termStore.sets.delete = function(siteId, setId, httpOptions) {
    if (!siteId || !setId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id', [siteId, setId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sites.termStore.sets.children.get = function(siteId, setId, httpOptions) {
    if (!siteId || !setId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/children', [siteId, setId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.termStore.sets.terms.children.get = function(siteId, setId, termId, httpOptions) {
    if (!siteId || !setId || !termId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId,termId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id/children', [siteId, setId, termId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.termStore.sets.terms.children.post = function(siteId, setId, termId, httpOptions) {
    if (!siteId || !setId || !termId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId,termId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id/children', [siteId, setId, termId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.termStore.sets.children.post = function(siteId, setId, httpOptions) {
    if (!siteId || !setId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/children', [siteId, setId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.termStore.groups.sets.terms.get = function(siteId, groupId, setId, termId, httpOptions) {
    if (!siteId || !groupId || !setId || !termId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,groupId,setId,termId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/groups/:group-id/sets/:set-id/terms/:term-id', [siteId, groupId, setId, termId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.termStore.sets.terms.get = function(siteId, setId, termId, httpOptions) {
    if (!siteId || !setId || !termId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId,termId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id', [siteId, setId, termId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.termStore.sets.terms.patch = function(siteId, setId, termId, httpOptions) {
    if (!siteId || !setId || !termId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId,termId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id', [siteId, setId, termId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.termStore.sets.terms.delete = function(siteId, setId, termId, httpOptions) {
    if (!siteId || !setId || !termId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId,termId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id', [siteId, setId, termId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sites.termStore.sets.relations.get = function(siteId, setId, httpOptions) {
    if (!siteId || !setId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/relations', [siteId, setId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.termStore.sets.terms.relations.get = function(siteId, setId, termId, httpOptions) {
    if (!siteId || !setId || !termId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId,termId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id/relations', [siteId, setId, termId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.termStore.sets.terms.relations.post = function(siteId, setId, termId, httpOptions) {
    if (!siteId || !setId || !termId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId,termId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id/relations', [siteId, setId, termId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.admin.sharepoint.settings.get = function(httpOptions) {
    var url = parse('/v1.0/admin/sharepoint/settings');
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.admin.sharepoint.settings.patch = function(httpOptions) {
    var url = parse('/v1.0/admin/sharepoint/settings');
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options, callbackData, callbacks);
};

endpoint.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options, callbackData, callbacks);
};

endpoint.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options, callbackData, callbacks);
};

endpoint.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options, callbackData, callbacks);
};

endpoint.utils = {};

endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

endpoint.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

endpoint.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

///////////////////////
//  Private helpers  //
///////////////////////

var mergeJSON = function (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
}

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}