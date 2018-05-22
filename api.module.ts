import * as api from './api/api';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('AccountingJournalsApi', api.AccountingJournalsApi)
.service('AccountsApi', api.AccountsApi)
.service('ActivitiesApi', api.ActivitiesApi)
.service('BankAccountsApi', api.BankAccountsApi)
.service('CatalogsApi', api.CatalogsApi)
.service('ClientsApi', api.ClientsApi)
.service('CommentsApi', api.CommentsApi)
.service('InventoryApi', api.InventoryApi)
.service('InvoicesApi', api.InvoicesApi)
.service('OrdersApi', api.OrdersApi)
.service('ProductsApi', api.ProductsApi)
.service('ProspectsApi', api.ProspectsApi)
.service('ProvidersApi', api.ProvidersApi)
.service('ServicesApi', api.ServicesApi)
.service('UserProfileApi', api.UserProfileApi)
.service('WarehousesApi', api.WarehousesApi)
.service('WebHooksApi', api.WebHooksApi)

export default apiModule;
