let mySummary = (()=>{
    let name = "Roshan yadav";
    let email = "roshanyadav810@gmail.com";
    let phoneNumber = "+91-9911446312";
    let skillls = {
        expert : {
            languages : ["Java","Javascript"],
            frameworks : ["spring","Express","jersey"],
            databases : ["MySql","MongoDb"],
            cloud : {
                "AWS" : ["SQS","S3","EC2","ELB","lambda","Route 53","SNS"]
            } 
        },
        familiarWith :{
            languages : ["python","Go"],
            frameworks : ["flask"],
            databases : ["dynmoDB","elasticSearch"]
        }

    }
    
    let aboutMe = ()=>{
        console.log(`
        Hi, i'm ${this.name}, a passionate, IIIT-Allahabad graduate backend developer.
            my passion for software lies with dreaming up ideas and making them come 
            true with elegant interfaces. i take great care in the experience, architecture, 
            and code quality of the things I build.`);
    };
    return aboutMe;

})();


mySummary();
