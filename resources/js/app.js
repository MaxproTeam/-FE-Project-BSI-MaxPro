import './bootstrap';
import loginPage from './pages/login.js';
import dashboardPICPage from './pages/pic/dashboard-pic.js';
import presentPICPage from './pages/pic/present-pic.js';

(async () => {
    await loginPage();
    await dashboardPICPage.setAttendance();

    await presentPICPage.getAttendance();
    await presentPICPage.setAttendance();
})();
