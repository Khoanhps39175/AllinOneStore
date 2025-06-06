
const listDashBoard = [
    "Accounts",
    "Authorities",
    "BaseProducts",
    "Cancels",
    "CartItems",
    "Catalogs",
    "Categories",
    "CostHistories",
    "Coupons",
    "Custom",
    "News",
    "OrderItems",
    "Orders",
    "PaymentMethods",
    "PriceHistories",
    "ProductImages",
    "ProductItems",
    "PromotionProduct",
    "Promotions",
    "PurchaseOrderItems",
    "PurchaseOrders",
    "Returns",
    "Reviews",
    "Roles",
    "ShippingMethods",
    "UserAddresses",
    "UserLogs",
    "VariantValues",
    "Variants",
]
export default [
  	{
        path: '/Admin/Accounts',
        component: import('../../components/Admin/Accounts/index.vue'),
        props: route => ({ TableName: 'Accounts'})
    },
    {
        path: '/Admin/Accounts/create',
        component:  () => import('../../components/Admin/Accounts/Form.vue'),
        props: route => ({ TableName: 'Accounts', action: 'create'})
    },
    {
        path: '/Admin/Accounts/view/:id',
        component:  () => import('../../components/Admin/Accounts/Form.vue'),
        props: route => ({ TableName: 'Accounts', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/Accounts/update/:id',
        component:  () => import('../../components/Admin/Accounts/Form.vue'),
        props: route => ({ TableName: 'Accounts', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/Authorities',
        component: import('../../components/Admin/Authorities/index.vue'),
        props: route => ({ TableName: 'Authorities'})
    },
    {
        path: '/Admin/Authorities/create',
        component:  () => import('../../components/Admin/Authorities/Form.vue'),
        props: route => ({ TableName: 'Authorities', action: 'create'})
    },
    {
        path: '/Admin/Authorities/view/:id',
        component:  () => import('../../components/Admin/Authorities/Form.vue'),
        props: route => ({ TableName: 'Authorities', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/Authorities/update/:id',
        component:  () => import('../../components/Admin/Authorities/Form.vue'),
        props: route => ({ TableName: 'Authorities', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/BaseProducts',
        component: import('../../components/Admin/BaseProducts/index.vue'),
        props: route => ({ TableName: 'BaseProducts'})
    },
    {
        path: '/Admin/BaseProducts/create',
        component:  () => import('../../components/Admin/BaseProducts/Form.vue'),
        props: route => ({ TableName: 'BaseProducts', action: 'create'})
    },
    {
        path: '/Admin/BaseProducts/view/:id',
        component:  () => import('../../components/Admin/BaseProducts/Form.vue'),
        props: route => ({ TableName: 'BaseProducts', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/BaseProducts/update/:id',
        component:  () => import('../../components/Admin/BaseProducts/Form.vue'),
        props: route => ({ TableName: 'BaseProducts', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/Cancels',
        component: import('../../components/Admin/Cancels/index.vue'),
        props: route => ({ TableName: 'Cancels'})
    },
    {
        path: '/Admin/Cancels/create',
        component:  () => import('../../components/Admin/Cancels/Form.vue'),
        props: route => ({ TableName: 'Cancels', action: 'create'})
    },
    {
        path: '/Admin/Cancels/view/:id',
        component:  () => import('../../components/Admin/Cancels/Form.vue'),
        props: route => ({ TableName: 'Cancels', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/Cancels/update/:id',
        component:  () => import('../../components/Admin/Cancels/Form.vue'),
        props: route => ({ TableName: 'Cancels', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/CartItems',
        component: import('../../components/Admin/CartItems/index.vue'),
        props: route => ({ TableName: 'CartItems'})
    },
    {
        path: '/Admin/CartItems/create',
        component:  () => import('../../components/Admin/CartItems/Form.vue'),
        props: route => ({ TableName: 'CartItems', action: 'create'})
    },
    {
        path: '/Admin/CartItems/view/:id',
        component:  () => import('../../components/Admin/CartItems/Form.vue'),
        props: route => ({ TableName: 'CartItems', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/CartItems/update/:id',
        component:  () => import('../../components/Admin/CartItems/Form.vue'),
        props: route => ({ TableName: 'CartItems', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/Catalogs',
        component: import('../../components/Admin/Catalogs/index.vue'),
        props: route => ({ TableName: 'Catalogs'})
    },
    {
        path: '/Admin/Catalogs/create',
        component:  () => import('../../components/Admin/Catalogs/Form.vue'),
        props: route => ({ TableName: 'Catalogs', action: 'create'})
    },
    {
        path: '/Admin/Catalogs/view/:id',
        component:  () => import('../../components/Admin/Catalogs/Form.vue'),
        props: route => ({ TableName: 'Catalogs', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/Catalogs/update/:id',
        component:  () => import('../../components/Admin/Catalogs/Form.vue'),
        props: route => ({ TableName: 'Catalogs', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/Categories',
        component: import('../../components/Admin/Categories/index.vue'),
        props: route => ({ TableName: 'Categories'})
    },
    {
        path: '/Admin/Categories/create',
        component:  () => import('../../components/Admin/Categories/Form.vue'),
        props: route => ({ TableName: 'Categories', action: 'create'})
    },
    {
        path: '/Admin/Categories/view/:id',
        component:  () => import('../../components/Admin/Categories/Form.vue'),
        props: route => ({ TableName: 'Categories', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/Categories/update/:id',
        component:  () => import('../../components/Admin/Categories/Form.vue'),
        props: route => ({ TableName: 'Categories', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/CostHistories',
        component: import('../../components/Admin/CostHistories/index.vue'),
        props: route => ({ TableName: 'CostHistories'})
    },
    {
        path: '/Admin/CostHistories/create',
        component:  () => import('../../components/Admin/CostHistories/Form.vue'),
        props: route => ({ TableName: 'CostHistories', action: 'create'})
    },
    {
        path: '/Admin/CostHistories/view/:id',
        component:  () => import('../../components/Admin/CostHistories/Form.vue'),
        props: route => ({ TableName: 'CostHistories', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/CostHistories/update/:id',
        component:  () => import('../../components/Admin/CostHistories/Form.vue'),
        props: route => ({ TableName: 'CostHistories', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/Coupons',
        component: import('../../components/Admin/Coupons/index.vue'),
        props: route => ({ TableName: 'Coupons'})
    },
    {
        path: '/Admin/Coupons/create',
        component:  () => import('../../components/Admin/Coupons/Form.vue'),
        props: route => ({ TableName: 'Coupons', action: 'create'})
    },
    {
        path: '/Admin/Coupons/view/:id',
        component:  () => import('../../components/Admin/Coupons/Form.vue'),
        props: route => ({ TableName: 'Coupons', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/Coupons/update/:id',
        component:  () => import('../../components/Admin/Coupons/Form.vue'),
        props: route => ({ TableName: 'Coupons', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/Custom',
        component: import('../../components/Admin/Custom/index.vue'),
        props: route => ({ TableName: 'Custom'})
    },
    {
        path: '/Admin/Custom/create',
        component:  () => import('../../components/Admin/Custom/Form.vue'),
        props: route => ({ TableName: 'Custom', action: 'create'})
    },
    {
        path: '/Admin/Custom/view/:id',
        component:  () => import('../../components/Admin/Custom/Form.vue'),
        props: route => ({ TableName: 'Custom', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/Custom/update/:id',
        component:  () => import('../../components/Admin/Custom/Form.vue'),
        props: route => ({ TableName: 'Custom', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/News',
        component: import('../../components/Admin/News/index.vue'),
        props: route => ({ TableName: 'News'})
    },
    {
        path: '/Admin/News/create',
        component:  () => import('../../components/Admin/News/Form.vue'),
        props: route => ({ TableName: 'News', action: 'create'})
    },
    {
        path: '/Admin/News/view/:id',
        component:  () => import('../../components/Admin/News/Form.vue'),
        props: route => ({ TableName: 'News', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/News/update/:id',
        component:  () => import('../../components/Admin/News/Form.vue'),
        props: route => ({ TableName: 'News', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/OrderItems',
        component: import('../../components/Admin/OrderItems/index.vue'),
        props: route => ({ TableName: 'OrderItems'})
    },
    {
        path: '/Admin/OrderItems/create',
        component:  () => import('../../components/Admin/OrderItems/Form.vue'),
        props: route => ({ TableName: 'OrderItems', action: 'create'})
    },
    {
        path: '/Admin/OrderItems/view/:id',
        component:  () => import('../../components/Admin/OrderItems/Form.vue'),
        props: route => ({ TableName: 'OrderItems', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/OrderItems/update/:id',
        component:  () => import('../../components/Admin/OrderItems/Form.vue'),
        props: route => ({ TableName: 'OrderItems', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/Orders',
        component: import('../../components/Admin/Orders/index.vue'),
        props: route => ({ TableName: 'Orders'})
    },
    {
        path: '/Admin/Orders/create',
        component:  () => import('../../components/Admin/Orders/Form.vue'),
        props: route => ({ TableName: 'Orders', action: 'create'})
    },
    {
        path: '/Admin/Orders/view/:id',
        component:  () => import('../../components/Admin/Orders/Form.vue'),
        props: route => ({ TableName: 'Orders', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/Orders/update/:id',
        component:  () => import('../../components/Admin/Orders/Form.vue'),
        props: route => ({ TableName: 'Orders', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/PaymentMethods',
        component: import('../../components/Admin/PaymentMethods/index.vue'),
        props: route => ({ TableName: 'PaymentMethods'})
    },
    {
        path: '/Admin/PaymentMethods/create',
        component:  () => import('../../components/Admin/PaymentMethods/Form.vue'),
        props: route => ({ TableName: 'PaymentMethods', action: 'create'})
    },
    {
        path: '/Admin/PaymentMethods/view/:id',
        component:  () => import('../../components/Admin/PaymentMethods/Form.vue'),
        props: route => ({ TableName: 'PaymentMethods', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/PaymentMethods/update/:id',
        component:  () => import('../../components/Admin/PaymentMethods/Form.vue'),
        props: route => ({ TableName: 'PaymentMethods', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/PriceHistories',
        component: import('../../components/Admin/PriceHistories/index.vue'),
        props: route => ({ TableName: 'PriceHistories'})
    },
    {
        path: '/Admin/PriceHistories/create',
        component:  () => import('../../components/Admin/PriceHistories/Form.vue'),
        props: route => ({ TableName: 'PriceHistories', action: 'create'})
    },
    {
        path: '/Admin/PriceHistories/view/:id',
        component:  () => import('../../components/Admin/PriceHistories/Form.vue'),
        props: route => ({ TableName: 'PriceHistories', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/PriceHistories/update/:id',
        component:  () => import('../../components/Admin/PriceHistories/Form.vue'),
        props: route => ({ TableName: 'PriceHistories', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/ProductImages',
        component: import('../../components/Admin/ProductImages/index.vue'),
        props: route => ({ TableName: 'ProductImages'})
    },
    {
        path: '/Admin/ProductImages/create',
        component:  () => import('../../components/Admin/ProductImages/Form.vue'),
        props: route => ({ TableName: 'ProductImages', action: 'create'})
    },
    {
        path: '/Admin/ProductImages/view/:id',
        component:  () => import('../../components/Admin/ProductImages/Form.vue'),
        props: route => ({ TableName: 'ProductImages', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/ProductImages/update/:id',
        component:  () => import('../../components/Admin/ProductImages/Form.vue'),
        props: route => ({ TableName: 'ProductImages', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/ProductItems',
        component: import('../../components/Admin/ProductItems/index.vue'),
        props: route => ({ TableName: 'ProductItems'})
    },
    {
        path: '/Admin/ProductItems/create',
        component:  () => import('../../components/Admin/ProductItems/Form.vue'),
        props: route => ({ TableName: 'ProductItems', action: 'create'})
    },
    {
        path: '/Admin/ProductItems/view/:id',
        component:  () => import('../../components/Admin/ProductItems/Form.vue'),
        props: route => ({ TableName: 'ProductItems', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/ProductItems/update/:id',
        component:  () => import('../../components/Admin/ProductItems/Form.vue'),
        props: route => ({ TableName: 'ProductItems', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/PromotionProduct',
        component: import('../../components/Admin/PromotionProduct/index.vue'),
        props: route => ({ TableName: 'PromotionProduct'})
    },
    {
        path: '/Admin/PromotionProduct/create',
        component:  () => import('../../components/Admin/PromotionProduct/Form.vue'),
        props: route => ({ TableName: 'PromotionProduct', action: 'create'})
    },
    {
        path: '/Admin/PromotionProduct/view/:id',
        component:  () => import('../../components/Admin/PromotionProduct/Form.vue'),
        props: route => ({ TableName: 'PromotionProduct', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/PromotionProduct/update/:id',
        component:  () => import('../../components/Admin/PromotionProduct/Form.vue'),
        props: route => ({ TableName: 'PromotionProduct', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/Promotions',
        component: import('../../components/Admin/Promotions/index.vue'),
        props: route => ({ TableName: 'Promotions'})
    },
    {
        path: '/Admin/Promotions/create',
        component:  () => import('../../components/Admin/Promotions/Form.vue'),
        props: route => ({ TableName: 'Promotions', action: 'create'})
    },
    {
        path: '/Admin/Promotions/view/:id',
        component:  () => import('../../components/Admin/Promotions/Form.vue'),
        props: route => ({ TableName: 'Promotions', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/Promotions/update/:id',
        component:  () => import('../../components/Admin/Promotions/Form.vue'),
        props: route => ({ TableName: 'Promotions', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/PurchaseOrderItems',
        component: import('../../components/Admin/PurchaseOrderItems/index.vue'),
        props: route => ({ TableName: 'PurchaseOrderItems'})
    },
    {
        path: '/Admin/PurchaseOrderItems/create',
        component:  () => import('../../components/Admin/PurchaseOrderItems/Form.vue'),
        props: route => ({ TableName: 'PurchaseOrderItems', action: 'create'})
    },
    {
        path: '/Admin/PurchaseOrderItems/view/:id',
        component:  () => import('../../components/Admin/PurchaseOrderItems/Form.vue'),
        props: route => ({ TableName: 'PurchaseOrderItems', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/PurchaseOrderItems/update/:id',
        component:  () => import('../../components/Admin/PurchaseOrderItems/Form.vue'),
        props: route => ({ TableName: 'PurchaseOrderItems', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/PurchaseOrders',
        component: import('../../components/Admin/PurchaseOrders/index.vue'),
        props: route => ({ TableName: 'PurchaseOrders'})
    },
    {
        path: '/Admin/PurchaseOrders/create',
        component:  () => import('../../components/Admin/PurchaseOrders/Form.vue'),
        props: route => ({ TableName: 'PurchaseOrders', action: 'create'})
    },
    {
        path: '/Admin/PurchaseOrders/view/:id',
        component:  () => import('../../components/Admin/PurchaseOrders/Form.vue'),
        props: route => ({ TableName: 'PurchaseOrders', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/PurchaseOrders/update/:id',
        component:  () => import('../../components/Admin/PurchaseOrders/Form.vue'),
        props: route => ({ TableName: 'PurchaseOrders', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/Returns',
        component: import('../../components/Admin/Returns/index.vue'),
        props: route => ({ TableName: 'Returns'})
    },
    {
        path: '/Admin/Returns/create',
        component:  () => import('../../components/Admin/Returns/Form.vue'),
        props: route => ({ TableName: 'Returns', action: 'create'})
    },
    {
        path: '/Admin/Returns/view/:id',
        component:  () => import('../../components/Admin/Returns/Form.vue'),
        props: route => ({ TableName: 'Returns', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/Returns/update/:id',
        component:  () => import('../../components/Admin/Returns/Form.vue'),
        props: route => ({ TableName: 'Returns', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/Reviews',
        component: import('../../components/Admin/Reviews/index.vue'),
        props: route => ({ TableName: 'Reviews'})
    },
    {
        path: '/Admin/Reviews/create',
        component:  () => import('../../components/Admin/Reviews/Form.vue'),
        props: route => ({ TableName: 'Reviews', action: 'create'})
    },
    {
        path: '/Admin/Reviews/view/:id',
        component:  () => import('../../components/Admin/Reviews/Form.vue'),
        props: route => ({ TableName: 'Reviews', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/Reviews/update/:id',
        component:  () => import('../../components/Admin/Reviews/Form.vue'),
        props: route => ({ TableName: 'Reviews', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/Roles',
        component: import('../../components/Admin/Roles/index.vue'),
        props: route => ({ TableName: 'Roles'})
    },
    {
        path: '/Admin/Roles/create',
        component:  () => import('../../components/Admin/Roles/Form.vue'),
        props: route => ({ TableName: 'Roles', action: 'create'})
    },
    {
        path: '/Admin/Roles/view/:id',
        component:  () => import('../../components/Admin/Roles/Form.vue'),
        props: route => ({ TableName: 'Roles', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/Roles/update/:id',
        component:  () => import('../../components/Admin/Roles/Form.vue'),
        props: route => ({ TableName: 'Roles', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/ShippingMethods',
        component: import('../../components/Admin/ShippingMethods/index.vue'),
        props: route => ({ TableName: 'ShippingMethods'})
    },
    {
        path: '/Admin/ShippingMethods/create',
        component:  () => import('../../components/Admin/ShippingMethods/Form.vue'),
        props: route => ({ TableName: 'ShippingMethods', action: 'create'})
    },
    {
        path: '/Admin/ShippingMethods/view/:id',
        component:  () => import('../../components/Admin/ShippingMethods/Form.vue'),
        props: route => ({ TableName: 'ShippingMethods', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/ShippingMethods/update/:id',
        component:  () => import('../../components/Admin/ShippingMethods/Form.vue'),
        props: route => ({ TableName: 'ShippingMethods', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/UserAddresses',
        component: import('../../components/Admin/UserAddresses/index.vue'),
        props: route => ({ TableName: 'UserAddresses'})
    },
    {
        path: '/Admin/UserAddresses/create',
        component:  () => import('../../components/Admin/UserAddresses/Form.vue'),
        props: route => ({ TableName: 'UserAddresses', action: 'create'})
    },
    {
        path: '/Admin/UserAddresses/view/:id',
        component:  () => import('../../components/Admin/UserAddresses/Form.vue'),
        props: route => ({ TableName: 'UserAddresses', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/UserAddresses/update/:id',
        component:  () => import('../../components/Admin/UserAddresses/Form.vue'),
        props: route => ({ TableName: 'UserAddresses', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/UserLogs',
        component: import('../../components/Admin/UserLogs/index.vue'),
        props: route => ({ TableName: 'UserLogs'})
    },
    {
        path: '/Admin/UserLogs/create',
        component:  () => import('../../components/Admin/UserLogs/Form.vue'),
        props: route => ({ TableName: 'UserLogs', action: 'create'})
    },
    {
        path: '/Admin/UserLogs/view/:id',
        component:  () => import('../../components/Admin/UserLogs/Form.vue'),
        props: route => ({ TableName: 'UserLogs', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/UserLogs/update/:id',
        component:  () => import('../../components/Admin/UserLogs/Form.vue'),
        props: route => ({ TableName: 'UserLogs', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/VariantValues',
        component: import('../../components/Admin/VariantValues/index.vue'),
        props: route => ({ TableName: 'VariantValues'})
    },
    {
        path: '/Admin/VariantValues/create',
        component:  () => import('../../components/Admin/VariantValues/Form.vue'),
        props: route => ({ TableName: 'VariantValues', action: 'create'})
    },
    {
        path: '/Admin/VariantValues/view/:id',
        component:  () => import('../../components/Admin/VariantValues/Form.vue'),
        props: route => ({ TableName: 'VariantValues', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/VariantValues/update/:id',
        component:  () => import('../../components/Admin/VariantValues/Form.vue'),
        props: route => ({ TableName: 'VariantValues', action: 'update', id: route.params.id,})
    },
  	{
        path: '/Admin/Variants',
        component: import('../../components/Admin/Variants/index.vue'),
        props: route => ({ TableName: 'Variants'})
    },
    {
        path: '/Admin/Variants/create',
        component:  () => import('../../components/Admin/Variants/Form.vue'),
        props: route => ({ TableName: 'Variants', action: 'create'})
    },
    {
        path: '/Admin/Variants/view/:id',
        component:  () => import('../../components/Admin/Variants/Form.vue'),
        props: route => ({ TableName: 'Variants', action: 'view', id: route.params.id,})
    },
    {
        path: '/Admin/Variants/update/:id',
        component:  () => import('../../components/Admin/Variants/Form.vue'),
        props: route => ({ TableName: 'Variants', action: 'update', id: route.params.id,})
    },
]
