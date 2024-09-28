import './bootstrap';
import loginPage from './pages/login.js';
import dashboardPICPage from './pages/dashboard-pic.js';

(async () => {
    await loginPage();
    await dashboardPICPage.absent();
})();
