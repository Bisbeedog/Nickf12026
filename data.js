var data = {
    Player: [
        { Name: "Pud", Points: 2 },
        { Name: "Yuki and Friends", Points: 2 },
        { Name: "Nick", Points: 0},
        { Name: "Strollin' Outta Q1", Points: 2},
        { Name: "Dynamic Racing Sloths", Points: 0},
        { Name: "Baskin Mommins", Points: 0}
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
            Points: 0
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
            Points: 0
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
            Points: 0
        },
        {
            Number: 14,
            Name: "Fernando Alonso",
            Team: "Aston Martin",
            Points: 0
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
            Points: 2
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
            Points: 0
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
            Points: 0
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
           }
    ]
}