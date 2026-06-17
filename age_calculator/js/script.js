
function calculateAge(){
    event.preventDefault();

    const today = new Date();
    const birthdayInput = new Date($("#bDate").val());

    const ageInMiliseconds = today - birthdayInput;
    const ageInSeconds = Math.floor(ageInMiliseconds/1000);
    const ageInMinutes = Math.floor(ageInSeconds/60);
    const ageInHours = Math.floor(ageInMinutes/60);
    const ageInDays = Math.floor(ageInHours/24);
    const ageInWeeks = Math.floor(ageInDays/7);
    const ageInMonths = Math.floor(ageInDays/30.436875);
    const ageInYears = Math.floor(ageInDays/365.25);

    let result = `
    <div class="result" id="result">
            <div class="result-item">
                        <h3>Age:</h3>
                        <p>${ageInYears} years ${ageInMonths % 12} months ${ageInDays % 30} days</p>
                    </div>
                    <div class="result-item">
                        <h3>Months Passed:</h3>
                        <p>${ageInMonths}</p>
                    </div>
                    <div class="result-item">
                        <h3>Weeks Passed:</h3>
                        <p>${ageInWeeks}</p>
                    </div>
                    <div class="result-item">
                        <h3>Days Passed:</h3>
                        <p>${ageInDays}</p>
                    </div>
                    <div class="result-item">
                        <h3>Hours Passed:</h3>
                        <p>${ageInHours}</p>
                    </div>
                    <div class="result-item">
                        <h3>Minutes Passed:</h3>
                        <p>${ageInMinutes}</p>
                    </div>
                    <div class="result-item">
                        <h3>Seconds Passed:</h3>
                        <p>${ageInSeconds}</p>
                    </div>
            </div>
    `

    $("#result-container").html(result)
}