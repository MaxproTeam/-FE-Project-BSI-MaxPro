import './bootstrap';
import loginPage from './pages/login.js';

import dashboardPICPage from './pages/pic/dashboard-pic.js';
import presentPICPage from './pages/pic/present-pic.js';

import dashboardSPVPage from './pages/spv/dashboard-spv.js';
import presentSPVPage from './pages/spv/present-spv.js';

import createWorkOrderPage from './pages/client/create-work-order.js';

import dashboardManagerPage from './pages/manager/dashboard-manager.js';
import detailProyekManagerPage from './pages/manager/detail-proyek-manager.js';
import approvalManagerPage from './pages/manager/approval-manager.js';
import workOrdersManagerPage from './pages/manager/work-orders.js';
import proyekManagerPage from './pages/manager/proyek.js';
import dashboardClientPage from './pages/client/dashboard-client.js';
import workOrdersClientPage from './pages/client/work-order-client.js';
import presentPICClientPage from './pages/client/present-pic.js';
import presentSPVClientPage from './pages/client/present-spv.js';

(async () => {
    await loginPage();
        
    await dashboardPICPage.setAttendance();
    await dashboardSPVPage.setAttendance();
    await dashboardManagerPage.getWorkOrders();
    await dashboardManagerPage.getCompanies();
    await dashboardClientPage.getWorkOrders();

    await presentPICPage.getAttendance();
    await presentPICPage.setAttendance();

    await presentSPVPage.getAttendance();
    await presentSPVPage.setAttendance();

    await presentPICClientPage.getPICAttendances();
    await presentSPVClientPage.getSPVAttendances();

    await createWorkOrderPage.setWorkOrder();
    await workOrdersClientPage.getWorkOrders();

    await detailProyekManagerPage.getCompany();
    await detailProyekManagerPage.getPICAttendances();
    await detailProyekManagerPage.getWorkOrders();

    await approvalManagerPage.getWorkOrder();

    await workOrdersManagerPage.getWorkOrders();
    await proyekManagerPage.getCompanies();
})();
