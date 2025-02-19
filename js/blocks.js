export let blocks = {
    Control: [
        {
            name: "If Statement",
            note: "if condition",
            id: 1,
            properties: [{ name: "Condition", value: "", save_as: "condition" }],
            string_part2add: "if //**condition**// then"
        },
        {
            name: "ElseIf Statement",
            note: "elseif comes after the if (if needed)",
            id: 2,
            properties: [{ name: "Condition", value: "", save_as: "condition" }],
            string_part2add: "elseif //**condition**// then"
        },
        {
            name: "Else Statement",
            note: "Doesn’t need any configuration",
            id: 3,
            properties: [],
            string_part2add: "else"
        },
        {
            name: "End (Conditions/Loops)",
            note: "Must always be present to close conditions/loops",
            id: 3,
            properties: [],
            string_part2add: "end"
        },
        {
            name: "While Loop Statement",
            note: "Loop executes while the condition is true",
            id: 1,
            properties: [{ name: "Condition", value: "", save_as: "condition" }],
            string_part2add: "while //**condition**// do"
        },
        {
            name: "Wait Block",
            note: "Pause execution for a set time (must be defined)",
            id: 1,
            properties: [{ name: "Time (seconds)", value: "", save_as: "time" }],
            string_part2add: "task.wait(//**time**//)"
        }
    ],

    Events: [
        {
            name: "When a player joins",
            note: "Works in a normal script",
            id: 1,
            properties: [{ name: "Function to fire", value: "", save_as: "function_name" }],
            string_part2add: "game.Players.PlayerAdded:Connect(//**function_name**//)"
        },
        {
            name: "When a player leaves",
            note: "Works in a normal script",
            id: 1,
            properties: [{ name: "Function to fire", value: "", save_as: "function_name" }],
            string_part2add: "game.Players.PlayerRemoved:Connect(//**function_name**//)"
        },
        {
            name: "When a Part was Touched",
            note: "Detect when a part is touched (e.g., game.Workspace.MyPart)",
            id: 1,
            properties: [
                { name: "Part To Detect", value: "", save_as: "part" },
                { name: "Function to fire", value: "", save_as: "function_name" }
            ],
            string_part2add: "//**part**//.Touched:Connect(//**function_name**//)"
        }
    ],

    Functions: [
        {
            name: "Define a Function",
            note: "Create a function",
            id: 1,
            properties: [
                { name: "Function Name", value: "", save_as: "function_name" },
                { name: "Arguments", value: "", save_as: "args" }
            ],
            string_part2add: "local function //**function_name**//(//**args**//)"
        },
        {
            name: "Return Function Block",
            note: "Return data as a callback",
            id: 2,
            properties: [{ name: "Data for callback", value: "", save_as: "data" }],
            string_part2add: "return //**data**//"
        },
        {
            name: "Call a Function",
            note: "Call a function and define the variable to store the returned value",
            id: 2,
            properties: [
                { name: "Function to fire", value: "", save_as: "function_name" },
                { name: "Arguments", value: "", save_as: "args" },
                { name: "Callback Variable", value: "", save_as: "variable" }
            ],
            string_part2add: "//**variable**// = //**function_name**//(//**args**//)"
        },
        {
            name: "End (Functions)",
            note: "Must always be present to close functions",
            id: 3,
            properties: [],
            string_part2add: "end"
        }
    ],

    Variables: [
        {
            name: "Set a Variable",
            note: "Create and set a variable",
            id: 2,
            properties: [
                { name: "Variable Name", value: "", save_as: "variableName" },
                { name: "Value to store", value: "", save_as: "value" }
            ],
            string_part2add: "local //**variableName**// = //**value**//"
        },
        {
            name: "Change a Variable",
            note: "Modify the value of a variable",
            id: 2,
            properties: [
                { name: "Variable Name", value: "", save_as: "variableName" },
                { name: "New Value", value: "", save_as: "value" }
            ],
            string_part2add: "//**variableName**// = //**value**//"
        }
    ],

    Objects: [
        {
            name: "Add a new Instance",
            note: "Create a new instance and define its type and parent",
            id: 2,
            properties: [
                { name: "Type Name", value: "", save_as: "type" },
                { name: "Parent", value: "", save_as: "parent" },
                { name: "Save On Variable", value: "", save_as: "variable" }
            ],
            string_part2add: "//**variable**// = Instance.new('//**type**//',//**parent**//)"
        },
        {
            name: "Destroy the Instance",
            note: "Delete an instance",
            id: 2,
            properties: [{ name: "Instance Variable", value: "", save_as: "variable" }],
            string_part2add: "//**variable**//:Destroy()"
        },
        {
            name: "Modify the Instance",
            note: "Change a property of an instance",
            id: 2,
            properties: [
                { name: "Instance Variable", value: "", save_as: "variable" },
                { name: "Property Name", value: "", save_as: "property" },
                { name: "Value", value: "", save_as: "value" }
            ],
            string_part2add: "//**variable**//.//**property**// = //**value**//"
        }
    ]
};
