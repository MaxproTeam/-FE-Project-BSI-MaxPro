import './bootstrap';
import loginPage from './pages/login.js';
import dashboardPICPage from './pages/pic/dashboard-pic.js';
import presentPICPage from './pages/pic/present-pic.js';
import dashboardSPVPage from './pages/spv/dashboard-spv.js';
import presentSPVPage from './pages/spv/present-spv.js';

(async () => {
    await loginPage();
        
    await dashboardPICPage.setAttendance();
    await dashboardSPVPage.setAttendance();

    await presentPICPage.getAttendance();
    await presentPICPage.setAttendance();

    await presentSPVPage.getAttendance();
    await presentSPVPage.setAttendance()
})();
