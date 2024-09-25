import './bootstrap';
import loginPage from './pages/login.JS';
import dashboardPICPage from './pages/dashboard-pic';

(async () => {
    await loginPage();
    await dashboardPICPage.absent();
})();
