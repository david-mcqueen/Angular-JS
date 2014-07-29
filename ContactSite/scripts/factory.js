/**
 * Created by Dave on 27/07/2014.
 */

app.factory('CompanyList', function(){
    var CompanyList = {};
    CompanyList.company = [
        {
            name:"Great Rail Journeys",
            character:"Tony Stark / Iron Man",
            Id: 1
        },
        {
            name:"Camping and Caravaning Club",
            character:"Student",
            Id: 2
        },
        {
            name:"Wyndhams",
            character:"Student",
            Id: 3
        },
        {
            name:"Chimu",
            character:"Student",
            Id: 4
        },
        {
            name:"Emperor Divers",
            character:"Cat",
            Id: 5
        },
        {
            name:"Diamond",
            character:"Dog",
            Id: 6
        }
    ];
    return CompanyList;
})