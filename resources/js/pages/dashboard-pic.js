const dashboardPICPage = {
    absent : async () => {
        if(window.isDashboardPIC) {
            try {
                const module = await import('../fetch/picJS.js')
                const btnUserAbsent = document.getElementById('btn-absent');

                btnUserAbsent.addEventListener('click', async (event) => {
                    const response = await module.picAbsent();

                    console.log(response)
                })
            } catch (err) {
                console.error('Error loading picJS:', err);
            }
        }
    }
}

export default dashboardPICPage;