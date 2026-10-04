var data = {
    Player: [
        { Name: "Pud", Points: 2 },
        { Name: "Yuki and Friends", Points: 6 },
        { Name: "Nick", Points: 6},
        { Name: "Strollin' Outta Q1", Points: 2},
        { Name: "Dynamic Racing Sloths", Points: 4},
        { Name: "Baskin Mommins", Points: 2}
    ],
    Driver: [
        {
            Number: 3,
            Name: "Max Verstappen",
            Team: "Red Bull",
            Points: 2
        },
        {
            Number: 6,
            Name: "Isack Hadjar",
            Team: "Red Bull",
            Points: 2
        },
        {
            Number: 1,
            Name: "Lando Norris",
            Team: "McLaren",
            Points: 0
        },
        {
            Number: 10,
            Name: "Pierre Gasly",
            Team: "Alpine",
            Points: 6
        },
        {
            Number: 11,
            Name: "Sergio Perez",
            Team: "Cadillac",
            Points: 0
        },
        {
            Number: 12,
            Name: "Kimi Antonelli",
            Team: "Mercedes",
            Points: 4
        },
        {
            Number: 14,
            Name: "Fernando Alonso",
            Team: "Aston Martin",
            Points: 4
        },
        {
            Number: 16,
            Name: "Charles LeClerc",
            Team: "Ferrari",
            Points: 0
        },
        {
            Number: 18,
            Name: "Lance Stroll",
            Team: "Aston Martin",
            Points: 0
        },  
        {
            Number: 22,
            Name: "Yuki Tsunoda",
            Team: "Red Bull",
            Points: 0
        },
        {
            Number: 41,
            Name: "Arvid Lindblad",
            Team: "RB",
            Points: 0
        },
        {
            Number: 23,
            Name: "Alex Albon",
            Team: "Williams",
            Points: 0
        },
        {
            Number: 27,
            Name: "Nico Hulkenburg",
            Team: "Audi",
            Points: 0
        },
        {
            Number: 5,
            Name: "Gabriel Bortoleto",
            Team: "Audi",
            Points: 4
        },
        {
            Number: 30,
            Name: "Liam Lawson",
            Team: "RB",
            Points: 0
        },
        {
            Number: 31,
            Name: "Esteban Ocon",
            Team: "Haas",
            Points: 0
        },
        {
            Number: 87,
            Name: "Oliver Bearman",
            Team: "Haas",
            Points: 2
        },
        {
            Number: 43,
            Name: "Franco Colapinto",
            Team: "Alpine",
            Points: 2
        },
        {
            Number: 44,
            Name: "Lewis Hamilton",
            Team: "Ferrari",
            Points: 0
        },
        {
            Number: 55,
            Name: "Carlos Sainz",
            Team: "Williams",
            Points: 0
        },
        {
            Number: 63,
            Name: "George Russel",
            Team: "Mercedes",
            Points: 0
        },
        {
            Number: 77,
            Name: "Valterri Bottas",
            Team: "Cadillac",
            Points: 2
        },
        {
            Number: 81,
            Name: "Oscar Piastri",
            Team: "Mclaren",
            Points: 0
        }
    ],
    Race: [
        {
            Name: "Australian Grand Prix",
            Date: "03-07-2026",
            Finish: [63, 12, 16, 44, 1, 3, 87, 41, 5, 10, 31, 23, 30, 43, 55, 11, 18, 14, 77, 6, 81, 27],
            Picks: [
                { Player: "Nick", Drivers: [12, 1, 43] },
                { Player: "Baskin Mommins", Drivers: [63, 77, 81] },
                { Player: "Yuki and Friends", Drivers: [3, 14, 6] },
                { Player: "Strollin' Outta Q1", Drivers: [44, 3, 31] },
                { Player: "Dynamic Racing Sloths", Drivers: [12, 55, 81] },
                { Player: "Pud", Drivers: [16, 1, 87] }
            ],
            BonusPoints: "+2 Points for Max Verstappen for most places gained"
           },
           {
            Name: "China Sprint",
            Date: "03-14-2026",
            Finish: [63, 16, 44, 1, 12, 81, 30, 87, 3, 31, 10, 55, 5, 43, 6, 23, 14, 18, 11, 27, 77, 41],
            Picks: [
                { Player: "Nick", Drivers: [1, 12, 43] },
                { Player: "Baskin Mommins", Drivers: [63, 81, 77] },
                { Player: "Yuki and Friends", Drivers: [3, 6, 14] },
                { Player: "Strollin' Outta Q1", Drivers: [44, 3, 31] },
                { Player: "Dynamic Racing Sloths", Drivers: [12, 81, 55] },
                { Player: "Pud", Drivers: [16, 1, 87] }
            ],
            BonusPoints: "None"
           },
           {
            Name: "Chinese GP",
            Date: "03-15-2026",
            Finish: [12, 63, 44, 16, 87, 10, 30, 6, 55, 43, 27, 41, 77, 31, 11, 3, 14, 18, 81, 1, 5, 23],
            Picks: [
                { Player: "Nick", Drivers: [12, 43, 1] },
                { Player: "Baskin Mommins", Drivers: [63, 77, 81] },
                { Player: "Yuki and Friends", Drivers: [6, 3, 14] },
                { Player: "Strollin' Outta Q1", Drivers: [44, 31, 3] },
                { Player: "Dynamic Racing Sloths", Drivers: [12, 55, 81] },
                { Player: "Pud", Drivers: [16, 87, 1] }
            ],
            BonusPoints: "+2 Points for Oliver Bearman for most places gained"
           },
           {
            Name: "Japanese GP",
            Date: "03-29-2026",
            Finish: [12, 81, 16, 63, 1, 44, 10, 3, 30, 31, 27, 6, 5, 41, 55, 43, 11, 14, 77, 23, 18, 87],
            Picks: [
                { Player: "Nick", Drivers: [12, 1, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 77] },
                { Player: "Yuki and Friends", Drivers: [3, 6, 14] },
                { Player: "Strollin' Outta Q1", Drivers: [44, 3, 31] },
                { Player: "Dynamic Racing Sloths", Drivers: [12, 81, 55] },
                { Player: "Pud", Drivers: [16, 1, 87] }
            ],
            BonusPoints: "+2 Points for Gabriel Bortoleto for most places gained"
           },
           {
            Name: "Miami GP Sprint",
            Date: "05-02-2026",
            Finish: [1, 81, 16, 63, 3, 12, 44, 10, 6, 43, 31, 87, 55, 30, 14, 11, 18, 23, 77, 27, 41, 5],
            Picks: [
                { Player: "Nick", Drivers: [1, 12, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 77] },
                { Player: "Yuki and Friends", Drivers: [3, 6, 14] },
                { Player: "Strollin' Outta Q1", Drivers: [3, 44, 31] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 12, 55] },
                { Player: "Pud", Drivers: [1, 16, 87] }
            ],
            BonusPoints: "None for sprint"
           }, 
           {
            Name: "Miami GP",
            Date: "05-03-2026",
            Finish: [12, 1, 81, 63, 3, 44, 43, 16, 55, 23, 87, 5, 31, 41, 14, 11, 18, 77, 27, 30, 10, 6],
            Picks: [
                { Player: "Nick", Drivers: [12, 1, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 77] },
                { Player: "Yuki and Friends", Drivers: [3, 14, 6] },
                { Player: "Strollin' Outta Q1", Drivers: [3, 44, 31] },
                { Player: "Dynamic Racing Sloths", Drivers: [12, 81, 55] },
                { Player: "Pud", Drivers: [16, 1, 87] }
            ],
            BonusPoints: "+2 Points for Gabriel Bortoleto for most places gained"
           }, 
           {
            Name: "Canada GP Sprint",
            Date: "05-23-2026",
            Finish: [63, 1, 12, 81, 16, 44, 3, 41, 43, 55, 30, 5, 31, 11, 27, 18, 77, 87, 23, 10, 6, 14],
            Picks: [
                { Player: "Nick", Drivers: [1, 12, 43] },
                { Player: "Baskin Mommins", Drivers: [63, 81, 77] },
                { Player: "Yuki and Friends", Drivers: [3, 6, 14] },
                { Player: "Strollin' Outta Q1", Drivers: [44, 3, 31] },
                { Player: "Dynamic Racing Sloths", Drivers: [12, 81, 55] },
                { Player: "Pud", Drivers: [1, 16, 87] }
            ],
            BonusPoints: "None for sprint"
           }, 
           {
            Name: "Canada GP",
            Date: "05-24-2026",
            Finish: [12, 44, 3, 16, 6, 43, 30, 10, 55, 87, 81, 27, 5, 31, 18, 77, 11, 1, 63, 14, 23, 41],
            Picks: [
                { Player: "Nick", Drivers: [12, 43, 1] },
                { Player: "Baskin Mommins", Drivers: [81, 77, 63] },
                { Player: "Yuki and Friends", Drivers: [3, 6, 14] },
                { Player: "Strollin' Outta Q1", Drivers: [44, 3, 31] },
                { Player: "Dynamic Racing Sloths", Drivers: [12, 55, 81] },
                { Player: "Pud", Drivers: [16, 87, 1] }
            ],
            BonusPoints: "+2 Points for Pierre Gasly and Valterri Bottas for most places gained"
           }, 
           {
            Name: "Monaco GP",
            Date: "06-07-2026",
            Finish: [12, 44, 10, 6, 81, 30, 41, 23, 31, 14, 5, 63, 27, 43, 11, 55, 16, 18, 1, 87, 77, 3],
            Picks: [
                { Player: "Nick", Drivers: [12, 43, 1] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 77] },
                { Player: "Yuki and Friends", Drivers: [6, 14, 3] },
                { Player: "Strollin' Outta Q1", Drivers: [44, 31, 3] },
                { Player: "Dynamic Racing Sloths", Drivers: [12, 81, 55] },
                { Player: "Pud", Drivers: [16, 1, 87] }
            ],
            BonusPoints: "+2 Points for Pierre Gasly for most places gained"
           }, 
           {
            Name: "Barcelona GP",
            Date: "06-14-2026",
            Finish: [44, 63, 1, 3, 81, 6, 10, 43, 30, 41, 5, 55, 31, 11, 16, 12, 87, 23, 14, 27, 77, 18],
            Picks: [
                { Player: "Nick", Drivers: [1, 43, 12] },
                { Player: "Baskin Mommins", Drivers: [63, 81, 77] },
                { Player: "Yuki and Friends", Drivers: [3, 6, 14] },
                { Player: "Strollin' Outta Q1", Drivers: [44, 3, 31] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 55, 12] },
                { Player: "Pud", Drivers: [1, 16, 87] }
            ],
            BonusPoints: "+2 Points for Pierre Gasly for most places gained"
           }, 
           {
            Name: "Austrian GP",
            Date: "06-28-2026",
            Finish: [63, 3, 12, 81, 44, 6, 1, 16, 30, 41, 5, 27, 10, 87, 43, 31, 23, 14, 18, 55, 11, 77],
            Picks: [
                { Player: "Nick", Drivers: [12, 1, 43] },
                { Player: "Baskin Mommins", Drivers: [63, 81, 77] },
                { Player: "Yuki and Friends", Drivers: [3, 6, 14] },
                { Player: "Strollin' Outta Q1", Drivers: [3, 44, 31] },
                { Player: "Dynamic Racing Sloths", Drivers: [12, 81, 55] },
                { Player: "Pud", Drivers: [1, 16, 87] }
            ],
            BonusPoints: "+2 Points for Fernando Alonso for most places gained"
           }, 
           {
            Name: "British GP Sprint",
            Date: "07-04-2026",
            Finish: [12, 44, 1, 63, 16, 3, 81, 30, 6, 41, 10, 43, 5, 87, 27, 31, 55, 23, 77, 14, 18, 11],
            Picks: [
                { Player: "Nick", Drivers: [12, 1, 43] },
                { Player: "Baskin Mommins", Drivers: [63, 81, 77] },
                { Player: "Yuki and Friends", Drivers: [3, 6, 14] },
                { Player: "Strollin' Outta Q1", Drivers: [44, 3, 31] },
                { Player: "Dynamic Racing Sloths", Drivers: [12, 81, 55] },
                { Player: "Pud", Drivers: [1, 16, 87] }
            ],
            BonusPoints: "None for Sprint"
           }, 
           {
            Name: "British GP",
            Date: "07-05-2026",
            Finish: [16, 63, 44, 1, 6, 30, 41, 5, 43, 10, 81, 87, 31, 11, 12, 77, 55, 14, 18, 3, 23, 27],
            Picks: [
                { Player: "Nick", Drivers: [1, 43, 12] },
                { Player: "Baskin Mommins", Drivers: [63, 81, 77] },
                { Player: "Yuki and Friends", Drivers: [6, 14, 3] },
                { Player: "Strollin' Outta Q1", Drivers: [44, 31, 3] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 12, 55] },
                { Player: "Pud", Drivers: [16, 1, 87] }
            ],
            BonusPoints: "+2 Points for Franco Colapinto for most places gained"
           }, 
           {
            Name: "Belgian GP",
            Date: "07-19-2026",
            Finish: [12, 16, 3, 44, 81, 6, 1, 5, 41, 43, 10, 30, 27, 87, 23, 55, 31, 77, 14, 18, 11, 63],
            Picks: [
                { Player: "Nick", Drivers: [12, 1, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 77, 63] },
                { Player: "Yuki and Friends", Drivers: [3, 6, 14] },
                { Player: "Strollin' Outta Q1", Drivers: [3, 44, 31] },
                { Player: "Dynamic Racing Sloths", Drivers: [12, 81, 55] },
                { Player: "Pud", Drivers: [16, 1, 87] }
            ],
            BonusPoints: "+2 Points for Isack Hadjar for most places gained"
           }, 
           {
            Name: "Hungarian GP",
            Date: "07-26-2026",
            Finish: [1, 3, 12, 16, 44, 6, 63, 30, 27, 41, 5, 10, 18, 14, 43, 31, 23, 55, 87, 81, 11, 77],
            Picks: [
                { Player: "Nick", Drivers: [12, 1, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 77, 63] },
                { Player: "Yuki and Friends", Drivers: [3, 6, 14] },
                { Player: "Strollin' Outta Q1", Drivers: [3, 44, 31] },
                { Player: "Dynamic Racing Sloths", Drivers: [12, 81, 55] },
                { Player: "Pud", Drivers: [16, 1, 87] }
            ],
            BonusPoints: "+2 Points for Lance Stroll for most places gained"
           },
           {
            Name: "Dutch GP Sprint",
            Date: "08-22-2026",
            Finish: [63, 16, 1, 12, 81, 3, 44, 10, 5, 41, 30, 43, 22, 31, 22, 31, 87, 23, 18, 14, 77, 55, 11, 27],
            Picks: [
                { Player: "Nick", Drivers: [12, 1, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 77, 63] },
                { Player: "Yuki and Friends", Drivers: [3, 22, 14] },
                { Player: "Strollin' Outta Q1", Drivers: [3, 44, 31] },
                { Player: "Dynamic Racing Sloths", Drivers: [12, 81, 55] },
                { Player: "Pud", Drivers: [16, 1, 87] }
            ],
            BonusPoints: "None for sprint"
           },
           {
            Name: "Dutch GP",
            Date: "08-23-2026",
            Finish: [1, 12, 63, 44, 16, 81, 30, 27, 14, 10, 22, 41, 5, 43, 11, 55, 23, 77, 31, 18, 87, 3],
            Picks: [
                { Player: "Nick", Drivers: [12, 1, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 77, 63] },
                { Player: "Yuki and Friends", Drivers: [3, 22, 14] },
                { Player: "Strollin' Outta Q1", Drivers: [3, 44, 31] },
                { Player: "Dynamic Racing Sloths", Drivers: [12, 81, 55] },
                { Player: "Pud", Drivers: [16, 1, 87] }
            ],
            BonusPoints: "+2 Points for Fernando Alonso for most places gained"
           },
           {
            Name: "Spanish GP",
            Date: "09-13-2026",
            Finish: [12, 3, 1, 16, 63, 30, 43, 81, 41, 27, 31, 10, 5, 22, 23, 87, 14, 77, 55, 11, 18, 44],
            Picks: [
                { Player: "Nick", Drivers: [12, 1, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 77, 63] },
                { Player: "Yuki and Friends", Drivers: [3, 22, 14] },
                { Player: "Strollin' Outta Q1", Drivers: [3, 44, 31] },
                { Player: "Dynamic Racing Sloths", Drivers: [12, 81, 55] },
                { Player: "Pud", Drivers: [16, 1, 87] }
            ],
            BonusPoints: "+2 Points for Kimi Antonelli for most places gained"
           },
           {
            Name: "Azerbaijani GP",
            Date: "09-26-2026",
            Finish: [63, 3, 6, 16, 12, 44, 41, 31, 87, 55, 27, 30, 81, 11, 5, 77, 43, 10, 1, 23, 14, 18],
            Picks: [
                { Player: "Nick", Drivers: [12, 1, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 77, 63] },
                { Player: "Yuki and Friends", Drivers: [3, 22, 14] },
                { Player: "Strollin' Outta Q1", Drivers: [3, 44, 31] },
                { Player: "Dynamic Racing Sloths", Drivers: [12, 81, 55] },
                { Player: "Pud", Drivers: [16, 1, 87] }
            ],
            BonusPoints: "+2 Points for Kimi Antonelli for most places gained"
           },
    ]
}