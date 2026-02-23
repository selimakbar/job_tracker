        const applicationData = {
            total: 8,
            interview: 0,
            rejected: 0
        };

        function updateTracker(data) {
            document.getElementById('total-count').innerText = data.total;
            document.getElementById('interview-count').innerText = data.interview;
            document.getElementById('rejected-count').innerText = data.rejected;
        }

        updateTracker(applicationData);