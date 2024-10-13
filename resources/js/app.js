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
import workOrderAssignSPVPage from './pages/spv/work-order-assign-spv.js';
import workOrderSPVPage from './pages/spv/work-order-spv.js';
import presentPICSPVPage from './pages/spv/present-pic-spv.js';
import workSchedulePICPage from './pages/pic/work-schedule.js';
import workOrdersPICPage from './pages/pic/work-order-pic.js';
import workOrderCheckSPVPage from './pages/spv/work-order-check.js';

(async () => {
    await loginPage();
    
    dashboardPICPage.getAccount();
    await dashboardPICPage.setAttendance();
    await dashboardPICPage.getWorkOrders();

    await workSchedulePICPage.getWorkOrders();
    await workOrdersPICPage.getWorkOrders();
    
    dashboardSPVPage.getAccount();
    await dashboardSPVPage.setAttendance();
    await dashboardSPVPage.getWorkChecklists();
    await dashboardSPVPage.getWorkOrders();

    await presentPICSPVPage.getPICAttendances();

    await workOrderSPVPage.getWorkOrders();
    await workOrderAssignSPVPage.getWorkOrderById();

    dashboardManagerPage.getAccount();
    await dashboardManagerPage.getWorkOrders();
    await dashboardManagerPage.getCompanies();

    dashboardClientPage.getAccount();
    await dashboardClientPage.getWorkOrders();

    await presentPICPage.getAttendance();
    await presentPICPage.setAttendance();

    await presentSPVPage.getAttendance();
    await presentSPVPage.setAttendance();

    await workOrderCheckSPVPage.getWorkOrderById();

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
