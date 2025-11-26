window.PLANS = {
  SE: { // هندسة برمجيات
    name: "هندسة برمجيات",
    levels: ["الأول","الثاني","الثالث","الرابع","الخامس","السادس","السابع","الثامن","التاسع","العاشر"],
    courses: [

      {
        id:"ENGL001", name:"Prep English I", level:1,
        sections:[
          { sec:"S1", instructor:"د. ليان", slots:[ {day:"Sun", start:"08:00", end:"11:00"}, {day:"Mon", start:"08:00", end:"11:00"} ,
            {day:"Tus", start:"08: 00", end:"10:00"}, {day:"Wed", start:"08 :00", end:"10:00"} ] },
         
        ]
      },
      
      {
        id:"MATH101", name:"calculus I", level:1,
        sections:[
          { sec:"C1", instructor:"د. أحمد", slots:[ {day:"Sun", start:"11:00", end:"13:00"}, {day:"Mon", start:"13:00", end:"15:00"} ] },

        ]
      },

      {
        id:"LS101", name:"Learning Skills", level:1,
        sections:[ 
            { sec:"L1", instructor:"د. سارة", slots:[ {day:"Tue", start:"10:00", end:"12:00"} ] }
        ]
      } ,

      {
        id:"MGT001", name:"Entrepreneurship", level:1,
        sections:[ 
            { sec:"E1", instructor:"د. خالد", slots:[ {day:"Sun", start:"13:00", end:"14:00"} ] }
        ]
      } ,

      {
        id:"ARAB101", name:"Arabic language", level:1,
        sections:[ 
            { sec:"P1", instructor:"د. نورة", slots:[ {day:"Wed", start:"10:00", end:"12:00"} ] }
        ]
      },


{
        id:"ENGL002", name:"Prep English II", level:2, prereq:["ENGL001"],
        sections:[ 
            { sec:"S1", instructor:"د. ليان", slots:[ {day:"Sun", start:"08:00", end:"11:00"}, {day:"Mon", start:"08:00", end:"11:00"} 
            , {day:"Tus", start:"08: 00", end:"10:00"}, {day:"Wed", start:"08 :00", end:"10:00"} ] }
        ]
},

{
    id:"PHYS101", name:"General physics I", level:2, prereq:["MATH101"],
        sections:[ 
            { sec:"P1", instructor:"د. سمير", slots:[ {day:"Sun", start:"12:00", end:"14:00"}, {day:"Mon", start:"11:00", end:"12:00"}  ,
            ,{day:"Wed", start:"12:00", end:"14:00"} ] }

    ]
  },

    {
        id:"CS111", name:"Computer Skills", level:2,
        sections:[ 
  { sec:"I1", instructor:"د. ليلى", slots:[ {day:"Mon", start:"12:00", end:"14:00"}, {day:"Tue", start:"10:00", end:"12:00"} ] }
        ]
    },

    {
        id:"IC101", name:"iclamic culture", level:2,
        sections:[ 
            { sec:"C1", instructor:"د. فاطمة", slots:[ {day:"Tue", start:"12:00", end:"14:00"} ] }
        ]
    },

    {
        id:" PE 001", name:"Prep Physical Educ I", level:2,
        sections:[ 
            { sec:"PE1", instructor:"د. سامي", slots:[ {day:"Sun", start:"11:00", end:"12:00"} ] }
        ]
    },
    {
        id:"CS101", name:"Computer Programming I", level:3, prereq:["MATH101"],
        sections:[ 
            { sec:"C2", instructor:"د. أحمد", slots:[ {day:"Sun", start:"12:00", end:"14:00"}, {day:"Mon", start:"10:00", end:"11:00"} ,
            , {day:"Tue", start:"10:00", end:"12:00"} ] }
        ]
    },
    {
        id:"MATH102", name:"calculus II", level:3, prereq:["MATH101"],
        sections:[ 
            { sec:"C4", instructor:"د. خالد", slots:[ {day:"Wed", start:"10:00", end:"12:00"}, {day:"Thu", start:"08:00", end:"12:00"} ] }
        ]
    },
    {
        id:" ENGL101", name:" English Writing I", level:3,
        sections:[ 
            { sec:"S3", instructor:"د. ليلى", slots:[ {day:"Mon", start:"14:00", end:"15:00"} ,
            , {day:"Tue", start:"12:00", end:"14:00"} ] }
        ]
    },
    {
        id:" PHY205", name:"General Physics II", level:3, prereq:["PHYS101"],
        sections:[ 
            { sec:"H1", instructor:"د. سميرة", slots:[ {day:"Sun", start:"08:00", end:"10:00"} ,
            , {day:"Mon", start:"08:00", end:"09:00"} ] },
            , {day:"Thu", start:"10:00", end:"12:00"} 
        ]
    },
    {
        id:"ARAB202", name:"Arabic Editing", level:3, prereq:["ARAB101"],
        sections:[ 
            { sec:"D1", instructor:"د. منى", slots:[ {day:"Wed", start:"12:00", end:"14:00"}, {day:"Thu", start:"14:00", end:"16:00"} ] }
        ]
    },

    {
        id:"CS102", name:"Computer Programming II", level:4, prereq:["CS101"],
        sections:[ 
            { sec:"C5", instructor:"د. أحمد", slots:[ {day:"Sun", start:"08:00", end:"10:00"}, {day:"Mon", start:"08:00", end:"09:00"} ,
           , {day:"Tue", start:"08:00", end:"10:00"} ] }
        ]
    },
    {
        id:"CS290", name:"Web Applocation Development", level:4, prereq:["CS101"],
        sections:[ 
            { sec:"L1", instructor:"د. سمير", slots:[ {day:"Mon", start:"13:00", end:"15:00"}, {day:"Tue", start:"12:00", end:"13:00"} ,
            , {day:"Wed", start:"11:00", end:"13:00"} ] }
        ]
    },
    {
        id:"CS225", name:"Software engineering Design and Development", level:4, prereq:["CSS101"],
        sections:[ 
            { sec:"S1", instructor:"د. نادر", slots:[ {day:"Tue", start:"14:00", end:"15:00"}, 
            , {day:"Wed", start:"08:00", end:"09:00"} ] },
        ]   
    },

    {
        id:"STAT219", name:"Prop&Stat For Eng &sc", level:4, prereq:["MATH102"],
        sections:[ 
            { sec:"M1", instructor:"د. ليلى", slots:[ {day:"Sun", start:"14:00", end:"15:00"} ,
           , {day:"Mon", start:"11:00", end:"13:00"} ] }
        ]
    },

    {
        id:"MATHXXX", name:"MATH electiv", level:4,
        sections:[ 
            { sec:"M2", instructor:"د. خالد", slots:[ {day:"Sun", start:"10:00", end:"12:00"} ,
           , {day:"Mon", start:"09:00", end:"10:00"} ] }
        ]
    },

        {
        id:"CS210", name:"Discrete Structures", level:5, prereq:["CSS210"],
        sections:[ 
            { sec:"D1", instructor:"د. منى", slots:[ {day:"Sun", start:"12:00", end:"14:00"}, {day:"Mon", start:"11:00", end:"12:00"} ] }
        ]
        },

        {
        id:"CS472", name:"Software Reqirements Engineering", level:5, prereq:["CS102"],
        sections:[ 
            { sec:"O1", instructor:"د. سامي", slots:[ {day:"Sun", start:"08:00", end:"10:00"}, {day:"Mon", start:"08:00", end:"09:00"} ]}
        ]
    },

    {
        id:"CS340", name:"Database Systems", level:5, prereq:["CS102"],
        sections:[ 
            { sec:"B1", instructor:"د. ليلى", slots:[ {day:"Mon", start:"14:00", end:"15:00"}, {day:"Tue", start:"12:00", end:"14:00"} ,
            ,{day:"Thu", start:"08:00", end:"10:00"}]}
        ]
    },

    {
        id:"CS344", name:"Advanced Programming", level:5, prereq:["CS102","CS111"],
        sections:[ 
            { sec:"N1", instructor:"د. نادر", slots:[ {day:"Sun", start:"10:00", end:"12:00"}, {day:"Mon", start:"09:00", end:"11:00"} ] }
        ]
    },

    {
        id:"IAS212", name:"Professional Eithics", level:5, prereq:["IAS111"],
        sections:[ 
            { sec:"E1", instructor:"د. فاطمة", slots:[ {day:"Wed", start:"08:00", end:"10:00"} ] }
        ]
    },

    {
        id:"IC408", name:"Islamic Political System", level:5,
        sections:[ 
            { sec:"I1", instructor:"د. خالد", slots:[ {day:"Wed", start:"10:00", end:"12:00"} ] }
        ]
    },
    
    {
        id:"CSS251", name:"Introduction to Comp. Orgnaization and Assembly Language", level:6, prereq:["CS102","CS210"],
        sections:[ 
            { sec:"A1", instructor:"د. نبيل", slots:[ {day:"Sun", start:"08:00", end:"10:00"}, {day:"Mon", start:"08:00", end:"09:00"} ] }
        ]
    },

    {
        id:"CS311", name:"Design and Analysis of Algorithms", level:6, prereq:["CS102"],
        sections:[ 
            { sec :"D1", instructor:"د. منى", slots:[ {day:"Sun", start:"14:00", end:"15:00"}, {day:"Mon", start:"12:00", end:"14:00"} ] }
        ]
    },

    {
        id:"CS330", name:"Introduction of Opretion System", level:6, prereq:["CS210"],
        sections:[ 
            { sec:"O1", instructor:"د. صالح", slots:[ {day:"Sun", start:"12:00", end:"14:00"}, {day:"Mon", start:"11:00", end:"12:00"},
            , {day:"Tue", start:"08:00", end:"10:00"} ] }
        ]
    },

    {
        id:"ENGL103", name:"English Writing II", level:6,
        sections:[ 
            { sec:"N1", instructor:"د. سامي", slots:[ {day:"Mon", start:"09:00", end:"10:00"}, {day:"Tue", start:"12:00", end:"14:00"} ]}
        ]
    },

    {
        id:"CS432", name:"Discrete Math for computer", level:7, prereq:["Math102"],
        sections:[ 
            { sec:"S1", instructor:"د. نادر", slots:[ {day:"Sun", start:"14:00", end:"15:00"}, {day:"Mon", start:"12:00", end:"14:00"}]}
        ]
    },

    {
        id:"COE344", name:"Computer Networks", level:7,
        sections:[ 
            { sec:"N1", instructor:"د. ليلى", slots:[ {day:"Mon", start:"10:00", end:"11:00"}, {day:"Wed", start:"12:00", end:"14:00"},
            , {day:"Thu", start:"10:00", end:"12:00"}] }
        ]
    },

    {
        id:"CS462", name:"Distributed System", level:7, prereq:["Stat219"],
        sections:[ 
            { sec:"D1", instructor:"د. منى", slots:[ {day:"Sun", start:"10:00", end:"12:00"}, {day:"Mon", start:"09:00", end:"10:00"}, ] }
        ]
    },

    {
        id:"IAS4XX", name:"Islamic Elective", level:7, prereq:["CS102"],
        sections:[ 
            { sec:"H1", instructor:"د. سامي", slots:[ {day:"Wed", start:"08:00", end:"10:00"}, ] }
        ]
    },

    {
        id:"CS474", name:"SoftWare Design and Architecture", level:8,
        sections:[ 
            { sec:"Q1", instructor:"د. خالد", slots:[ {day:"Sun", start:"14:00", end:"15:00"}, {day:"Mon", start:"12:00", end:"14:00"},
            , {day:"Tue", start:"12:00", end:"14:00"}] }
        ]
    },

    {
        id:"CS444", name:"SoftWare Quality Assurance", level:8,
        sections:[ 
            { sec:"M1", instructor:"د. فاطمة", slots:[{day:"Wed", start:"10:00", end:"11:00"} ] } 
        ]
    },

    {
        id:"ETHC303", name:"Eithical and Social Aspects of Computer", level:8,
        sections:[ 
            { sec:"E1", instructor:"د. نادر", slots:[ {day:"Sun", start:"08:00", end:"10:00"}
            , {day:"Mon", start:"08:00", end:"09:00"}] }
        ]
    },

    {
        id:"SCIXXXX", name:"Science elective", level:8,
        sections:[ 
            { sec:"S1", instructor:"د. سامي", slots:[ {day:"Sun", start:"10:00", end:"12:00"}
            , {day:"Mon", start:"09:00", end:"10:00"}] }
        ]
    },

    {
        id:"CS476", name:"Software Testing and Validation", level:9,
        sections:[ 
            { sec:"T1", instructor:"د. ليلى", slots:[ {day:"Sun", start:"12:00", end:"14:00"}, {day:"Mon", start:"10:00", end:"11:00"},] }
        ]
    },

    {
        id:"CS488", name:"Software Construction Laboratory", level:9,
        sections:[ 
            { sec:"L1", instructor:"د. منى", slots:[ {day:"Sun", start:"08:00", end:"10:00"}
            , {day:"Mon", start:"08:00", end:"09:00"}, {day:"Wed", start:"08:00", end:"10:00"} ] }
            ]
        },

        {
        id:"CS432", name:"Software Security Engineering", level:10,
        sections:[ 
            { sec:"S1", instructor:"د. خالد", slots:[ {day:"Sun", start:"08:00", end:"10:00"}, {day:"Mon", start:"08:00", end:"09:00"},
            , {day:"Tue", start:"08:00", end:"10:00"}]  }
        ]
    },

    {
        id:"CS484", name:"Software Configuration and Evolution", level:10,
        sections:[ 
            { sec:"C1", instructor:"د. فاطمة", slots:[ {day:"Sun", start:"14:00", end:"15:00"}
            , {day:"Mon", start:"11:00", end:"13:00"}] }
        ]
    },

    {
        id:"CSxx11", name:"Software Engineering Elective", level:10,
        sections:[ 
            { sec:"H1", instructor:"د. سامي", slots:[ {day:"Sun", start:"10:00", end:"12:00"}
            , {day:"Mon", start:"09:00", end:"10:00"}]}
             ]
    },

    {
        id:"CSxx3", name:"Software Engineering Elective", level:10,
        sections:[ 
            { sec:"E1", instructor:"د. نادر", slots:[ {day:"Sun", start:"12:00", end:"14:00"}
            , {day:"Mon", start:"10:00", end:"11:00"}]}
             ]
    },
    
]
    },
    // end swe

  
  CE: { // هندسة حاسب
    name: "هندسة حاسب",
    levels: ["الأول","الثاني","الثالث","الرابع","الخـامس","السادس","السابع","الثامن","التاسع","العاشر"],
    courses: [
      {
        id:"CE202", name:"دوائر رقمية", level:3, prereq:["PHYS101"],
        sections:[
          { sec:"D1", instructor:"د. هاني", slots:[ {day:"Mon", start:"10:00", end:"11:15"}, {day:"Wed", start:"10:00", end:"11:15"} ] },
          { sec:"D2", instructor:"د. هاني", slots:[ {day:"Mon", start:"11:00", end:"12:15"}, {day:"Wed", start:"11:00", end:"12:15"} ] } // يتداخل جزئياً مع D1
        ]
      },
      {
        id:"CE310", name:"معماريات الحاسب", level:5, prereq:["CS201"],
        sections:[
          { sec:"A1", instructor:"د. نبيل", slots:[ {day:"Thu", start:"09:00", end:"10:15"} ] }
        ]
      }
    ]
  },

  CS: { // علوم حاسب
    name: "علوم حاسب",
    levels: ["الأول","الثاني","الثالث","الرابع","الخامس","السادس","السابع","الثامن","التاسع","العاشر"],
    courses: [
      {
        id:"CS201", name:"هياكل بيانات", level:3, prereq:["CS102"],
        sections:[
          { sec:"H1", instructor:"د. منى", slots:[ {day:"Sun", start:"09:00", end:"10:15"} ] },
          { sec:"H2", instructor:"د. منى", slots:[ {day:"Tue", start:"09:00", end:"10:15"} ] }
        ]
      },
      {
        id:"CS305", name:"أنظمة تشغيل", level:5, prereq:["CS201"],
        sections:[
          { sec:"OS1", instructor:"د. صالح", slots:[ {day:"Mon", start:"10:30", end:"11:45"}, {day:"Wed", start:"10:30", end:"11:45"} ] }
        ]
      }
    ]
  }
};
