export let blocks = {
    Control:[
        {
            name:"If Statement",
            note:"if condition",
            id:1,
            properties:[
                {name:"Condition",value:"",save_as:"condition"}
            ],
            string_part2add:"if //**condition**// then"
        },
        {
            name:"ElseIf Statement",
            note:"elseif commes after the if(if needed)",
            id:2,
            properties:[
                {name:"Condition",value:"",save_as:"condition"}
            ],
            string_part2add:"elseif //**condition**// then"
        },
        {
            name:"Else Statement",
            note:"Doesnt need for a config",
            id:3,
            properties:[
            ],
            string_part2add:"else"
        },
        {
            name:"End (Conditions/Loops)",
            note:" - Must always be present to close the Conditions/Loops <br> - And it doesnt need any config",
            id:3,
            properties:[
            ],
            string_part2add:"end"
        },
        {
            name:"While Loop Statement",
            note:"this boucle is closed while the condition is true",
            id:1,
            properties:[
                {name:"Condition",value:"",save_as:"condition"}
            ],
            string_part2add:"while //**condition**// do"
        },
        {
            name:"Wait Block",
            note:"this block just a delay to stop the code by letting it waitting for a certain time (must be defined)",
            id:1,
            properties:[
                {name:"Time(seconds)",value:"",save_as:"time"}
            ],
            string_part2add:"task.wait(//**time**//)"
        },
    ],
    Events:[
        {
            name:"When a player joins",
            note:"This works on a Normal Scripts",
            id:1,
            properties:[
                {name:"Function to fire",value:"",save_as:"function_name"}
            ],
            string_part2add:"game.Players.PlayerAdded:Connect(//**function_name**//)"
        },
        {
            name:"When a player leaves",
            note:"This works on a Normal Scripts",
            id:1,
            properties:[
                {name:"Function to fire",value:"",save_as:"function_name"}
            ],
            string_part2add:"game.Players.PlayerRemoved:Connect(//**function_name**//)"
        },
        {
            name:"When a Part was Touched",
            note:"This works on a Normal Scripts , part to detect field can be for example : game.Workspace.MyPart",
            id:1,
            properties:[
                {name:"Part To Detect",value:"",save_as:"part"},
                {name:"Function to fire",value:"",save_as:"function_name"}
            ],
            string_part2add:"//**part**//.Touched:Connect(//**function_name**//)"
        }
    ],
    Functions:[
        {
            name:"Define a Function",
            note:"Create a function",
            id:1,
            properties:[
                {name:"Name Function",value:"",save_as:"function_name"},
                {name:"Arguments",value:"",save_as:"args"}
            ],
            string_part2add:"local function //**function_name**//(//**args**//)"
        },
        {
            name:"Return Function Block",
            note:"Return data as a callback", 
            id:2,
            properties:[
                {name:"Data for callback",value:"",save_as:"data"}
            ],
            string_part2add:"return //**data**//"
        },
        {
            name:"Call a Function",
            note:"Call a function and define the varaible to store in it the value callback", 
            id:2,
            properties:[
                {name:"Function to fire",value:"",save_as:"function_name"},
                {name:"Arguments",value:"",save_as:"args"},
                {name:"CallBack Variable",value:"",save_as:"variable"}
            ],
            string_part2add:"//**variable**// = //**function_name**//(//**args**//)"
        },
        {
            name:"End (Functions)",
            note:" - Must always be present to close the Functions <br> - And it doesnt need any config",
            id:3,
            properties:[
            ],
            string_part2add:"end"
        }
    ],
    Variables:[
        {
            name:"Set a Variable",
            note:"Create and set a Variable and a value", 
            id:2,
            properties:[
                {name:"Name Variable",value:"",save_as:"variableName"},
                {name:"Value to store",value:"",save_as:"value"}
            ],
            string_part2add:"local //**variableName**// = //**value**//"
        },
        {
            name:"Change a Variable",
            note:"Change the Value of the Variable", 
            id:2,
            properties:[
                {name:"Name Variable",value:"",save_as:"variableName"},
                {name:"Value to change",value:"",save_as:"value"}
            ],
            string_part2add:"//**variableName**// = //**value**//"
        }
    ],
    Objects:[
        {
            name:"Add a new Instance",
            note:"Create a new Instance(Object) and define her type and her parent <br> - Create a new variable and enter her name in the needed filled", 
            id:2,
            properties:[
                {name:"Type Name",value:"",save_as:"type"},
                {name:"Parent",value:"",save_as:"parent"},
                {name:"Save On Variable",value:"",save_as:"variable"}
            ],
            string_part2add:"//**variable**// = Instance.new('//**type**//',//**parent**//)"
        },
        {
            name:"Destroy the Instance",
            note:"Destroy/Remove the Instance(Object)", 
            id:2,
            properties:[
                {name:"Instance Variable",value:"",save_as:"variable"}
            ],
            string_part2add:"//**variable**//:Destroy()"
        },
        {
            name:"Modify the Instance",
            note:"Modify a Property in the Instance(Object)", 
            id:2,
            properties:[
                {name:"Instance Variable",value:"",save_as:"variable"},
                {name:"Property Name",value:"",save_as:"property"},
                {name:"Value",value:"",save_as:"value"}
            ],
            string_part2add:"//**variable**//.//**property**// = //**value**//"
        }
    ]
}