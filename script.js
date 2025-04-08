// Dữ liệu câu hỏi (362 câu)
const quizData = [
    {
        question:
            "What's the name of the web console that can be accessed to check log reports and environment health information?",
        type: "single",
        options: ["Environment Center", "Service Center", "Service Studio", "Log Center"],
        correct: [1],
        explanation:
            "Service Center is the OutSystems web console for monitoring logs and environment health.",
    },
    {
        question:
            "If we have multiple Exception Handlers in an Action flow and an Exception is raised...",
        type: "single",
        options: [
            "... the execution is always moved to the Global Exception Handler.",
            "a Switch statement is needed to select which Exception Handler will continue the execution.",
            "... the execution is moved to the Exception Handler that is most specific to the Exception.",
            "... the execution is moved to all Exception Handlers of the Action.",
        ],
        correct: [2],
        explanation:
            "Execution moves to the most specific Exception Handler matching the exception type.",
    },
    {
        question: "When the validation is set to Client & Server ...",
        type: "single",
        options: [
            "There is no Client & Server validation.",
            "Built-in validations are first checked on the client-side but the request goes to the server anyway to perform custom validations.",
            "Custom validations are checked on the server-side if all mandatory fields are empty.",
            "Built-in validations are first checked on the client-side and, if not valid, the user gets error messages immediately.",
        ],
        correct: [3],
        explanation:
            "Client & Server validation checks built-in rules client-side first, showing errors immediately if invalid.",
    },
    {
        question: "The SQL Query only allows executing SELECT statements",
        type: "single",
        options: ["True", "False"],
        correct: [1],
        explanation:
            "SQL Query in OutSystems supports more than just SELECT, including INSERT, UPDATE, etc.",
    },
    {
        question:
            "In Outsystems, the output parameters of a Consumed REST API Method cannot be mapped to...",
        type: "single",
        options: ["an Aggregate.", "an Entity.", "a Basic Type.", "a Structure."],
        correct: [0],
        explanation: "Aggregates are queries, not data types, so REST outputs cannot map to them.",
    },
    {
        question: "When designing the flow of a Server Action ...",
        type: "single",
        options: [
            "It can have only one Start node and one End node.",
            "It can have only one Start node but one or more End nodes.",
            "It can have one or more Start nodes but only one End node.",
            "It can have multiple Start and End nodes.",
        ],
        correct: [1],
        explanation: "Server Actions require one Start node but can have multiple End nodes.",
    },
    {
        question: "To consume a SOAP Web Service...",
        type: "single",
        options: [
            "Provide the WSDL (the endpoint URL or upload file), choose the binding (if there's more than one), and all methods are automatically consumed.",
            "Provide the WSDL (the endpoint URL or upload file), choose the binding (if there's more than one), and choose the methods to consume.",
        ],
        correct: [1],
        explanation: "You select specific SOAP methods to consume after providing the WSDL.",
    },
    {
        question:
            "Regarding property Escape Content of Expression, which of the following options is true?",
        type: "single",
        options: [
            "When set to Yes, the result returns exactly as the result of the formula",
            "When the value is No, the special characters in the returned result have been replaced by characters that do not affect the protocol being used.",
            "The default value is No",
            "When set to No, the result returns exactly as the result of the formula",
        ],
        correct: [1],
        explanation:
            "Escape Content set to No escapes special characters to ensure protocol safety.",
    },
    {
        question:
            "An instance of a Web Block is a widget and when refreshing it with an Ajax Refresh",
        type: "single",
        options: [
            "The whole screen is refreshed.",
            "The Web Block Preparation is executed and the Web Block updated.",
            "The Ajax Refresh is ignored.",
            "The Web Block stays the same because the Preparation is not executed.",
        ],
        correct: [1],
        explanation: "Ajax Refresh triggers the Web Block's Preparation and updates it.",
    },
    {
        question:
            "When consuming a REST service, what callback action should be used to customize a request sent to the external service?",
        type: "single",
        options: ["On After Response", "On Before Request", "On REST Request", "On Consume"],
        correct: [1],
        explanation: "On Before Request allows customization of the REST request before it’s sent.",
    },
    {
        question: "Events only allow to communicate with the parent element.",
        type: "single",
        options: ["True", "False"],
        correct: [1],
        explanation:
            "Events in OutSystems are designed to communicate from child to parent elements.",
    },
    {
        question:
            "When debugging a consumer module, how do we guarantee that the execution stops on breakpoints defined in the producer module?",
        type: "single",
        options: [
            "We just need to set breakpoints in the producer module. The execution will stop on its breakpoints automatically.",
            "We need to also start the debugger on the producer module.",
            "In the producer, set the Entry Module property to the consumer module.",
            "Nothing, just leave Service Studio open.",
        ],
        correct: [1],
        explanation: "Start the debugger in the producer module to stop at its breakpoints.",
    },
    {
        question: "Entity Identifiers can be simple primary keys or composite keys",
        type: "single",
        options: ["FALSE", "TRUE"],
        correct: [1],
        explanation: "OutSystems supports both simple and composite keys as Entity Identifiers.",
    },
    {
        question:
            "For a record to be included in the output result it must be true for all filters defined.",
        type: "single",
        options: ["True", "False"],
        correct: [0],
        explanation:
            "All filters in an Aggregate must evaluate to true for a record to be included.",
    },
    {
        question:
            "Some widgets can trigger Screen Actions with Ajax. That can be defined in a section in their properties that is called ...",
        type: "single",
        options: [
            "On Refresh",
            "On Click or On Change, depending on the widget.",
            "Events",
            "Special List",
        ],
        correct: [2],
        explanation:
            "The 'Events' section in widget properties defines Ajax-triggered Screen Actions.",
    },
    {
        question: "Which of the following events is not available in Screens or Blocks?",
        type: "single",
        options: ["After Fetch", "Initialize", "Ready", "Render"],
        correct: [0],
        explanation:
            "After Fetch is not a standard event in Screens or Blocks; it’s used in data actions.",
    },
    {
        question: "In which Service Studio layer can Screens and Blocks be found?",
        type: "single",
        options: ["Logic", "Data", "Interface", "Processes"],
        correct: [2],
        explanation: "Screens and Blocks are part of the Interface layer in Service Studio.",
    },
    {
        question:
            "Which of the following steps is necessary to create a many-to-many relationship between Entity A and Entity B?",
        type: "single",
        options: [
            "Set the data type of the identifier attribute of Entity B to Entity A Identifier.",
            "Add a new reference attribute of type Entity B Identifier to Entity A.",
            "Add a new Entity C, with two reference attributes of type Entity A Identifier and Entity B Identifier.",
            "Add a new reference attribute of type Entity B Identifier to Entity A and a new reference attribute of type Entity A Identifier to Entity B.",
        ],
        correct: [2],
        explanation:
            "A many-to-many relationship requires a junction Entity C with references to both A and B.",
    },
    {
        question: "Regarding sorting in a Table, which of the following options is correct?",
        type: "single",
        options: [
            "All header cells need to have the Sort Attribute property defined.",
            "The On Sort event has an input parameter containing the clicked column.",
            "Only the Sort Attribute of the header cells needs to be defined. Data is refreshed automatically.",
        ],
        correct: [1],
        explanation:
            "The On Sort event provides the clicked column as an input parameter for sorting logic.",
    },
    {
        question:
            "One of the following Tools allows you to manage the application's lifecycle across an infrastructure. Which one?",
        type: "single",
        options: ["Integration Studio", "LifeTime", "Service Center", "Service Studio"],
        correct: [1],
        explanation:
            "LifeTime is the tool for managing the application lifecycle across environments.",
    },

    {
        question:
            "Which of the following is the correct order of occurrence of events in a Screen?",
        type: "single",
        options: [
            "Initialize, Render, Ready, Destroy.",
            "Ready, Initialize, Render, Destroy.",
            "Initialize, Destroy, Ready, Render.",
            "Initialize, Ready, Render, Destroy.",
        ],
        correct: [3], // Đáp án đúng là "Initialize, Ready, Render, Destroy."
        explanation:
            "The correct order of events in a Screen is Initialize, Ready, Render, and Destroy. This ensures the screen is first initialized, then ready to use, followed by rendering, and finally destroyed when no longer needed.",
    },
    {
        question:
            "Consider a Web Screen with a Button that is associated to a Screen Action. An Ajax Refresh statement in that Screen Action allows to refresh part of that Web Screen, ...",
        type: "single",
        options: [
            "regardless of the Button's Method.",
            "if the Button has Method Ajax Submit.",
            "if the Button has Method Submit.",
            "if the button has Method Navigate.",
        ],
        correct: [1], // Đáp án đúng là "if the Button has Method Ajax Submit."
        explanation:
            "Ajax Refresh in a Screen Action can only refresh parts of the Web Screen if the button uses the 'Ajax Submit' method.",
    },
    {
        question:
            "Regarding All Exception Handler in Outsystems, select the statement that is true.",
        type: "single",
        options: [
            "The Abort Transaction property will be disabled when the Type Exception is selected for the exception handler",
            "The All Exception handler will handle all exceptions if no exception handler describes the error that is happening",
            "The All Exception handler can only be used in UI Flow",
            "All Exception handler will handle all errors no matter how",
        ],
        correct: [3], // Đáp án đúng là "All Exception handler will handle all errors no matter how"
        explanation:
            "The 'All Exception' handler in Outsystems is a catch-all handler that processes any error not specifically handled by other exception handlers.",
    },
    {
        question: "Event Handler can be defined at the Screen level.",
        type: "single",
        options: ["True", "False"],
        correct: [0], // Đáp án đúng là "True"
        explanation:
            "In Outsystems, event handlers can be defined at the Screen level to handle events like clicks, form submissions, etc.",
    },
    {
        question: "The Check Box widget is bound to a Variable of type...",
        type: "single",
        options: ["Date", "Boolean", "Text", "Integer"],
        correct: [1], // Đáp án đúng là "Boolean"
        explanation:
            "A Check Box widget in Outsystems is typically bound to a Boolean variable, representing checked (true) or unchecked (false) states.",
    },
    {
        question: "Regarding Sorting in Aggregates, which of the following options is correct?",
        type: "single",
        options: [
            "If more than one sorting criterion is defined, all of them must have the same direction (ascending or descending).",
            "Aggregates only support one sorting criterion.",
            "It is only possible to set multiple sorting criteria if duplicate records exist in the entity.",
            "It is mandatory to set the direction for all sorting criteria (ascending or descending).",
        ],
        correct: [0], // Đáp án đúng là "If more than one sorting criterion is defined, all of them must have the same direction (ascending or descending)."
        explanation:
            "In Outsystems, when sorting with multiple criteria, all criteria need to share the same direction.",
    },
    {
        question: "When you want to use Ajax, you have to choose Method in On Click",
        type: "single",
        options: ["Ajax Submit", "Client & Server Submit", "Ajax & Server Submit", "Server Submit"],
        correct: [0], // Đáp án đúng là "Ajax Submit"
        explanation:
            "To trigger Ajax functionality, you need to use the 'Ajax Submit' method in the On Click event.",
    },
    {
        question:
            "Considering that Aggregates can have hidden columns, which of the following options is correct?",
        type: "single",
        options: [
            "Columns that are empty in the database are automatically hidden.",
            "The hidden columns are not part of the output.",
            "Hiding columns in the Aggregate only affects the preview of the output.",
            "The hidden columns help optimizing the Aggregate.",
        ],
        correct: [1], // Đáp án đúng là "The hidden columns are not part of the output."
        explanation:
            "Hidden columns in Aggregates are not included in the output results. They can still be used internally but are not shown to the user.",
    },
    {
        question:
            "Which event handler of the first aggregate can be used to refresh the query of the second aggregate?",
        type: "single",
        options: ["On Destroy", "After Fetch", "On Ready", "On After Fetch"],
        correct: [3], // Đáp án đúng là "On After Fetch"
        explanation:
            "The 'On After Fetch' event handler can be used to refresh the query of the second aggregate after the first aggregate has completed its fetch operation.",
    },
    {
        question: "Regarding data relationships, which of the following options is correct?",
        type: "single",
        options: [
            "An Entity must have an identifier to allow relationships.",
            "An Entity can only have one reference attribute.",
            "A reference attribute needs to be mandatory.",
            "The Entity identifier must be an integer.",
        ],
        correct: [0], // Đáp án đúng là "An Entity must have an identifier to allow relationships."
        explanation:
            "For an entity to participate in relationships, it must have an identifier (primary key).",
    },

    {
        question: "What is the main purpose of the Screen Preparation?",
        type: "single",
        options: [
            "Redirect the user to the proper screen.",
            "Fetch data from databases.",
            "Decide what widgets will be rendered.",
            "Submit the form data to the server.",
        ],
        correct: [1], // Đáp án đúng là "Fetch data from databases."
        explanation:
            "The main purpose of Screen Preparation is to fetch the necessary data from the database to ensure the screen has the right data to render.",
    },
    {
        question:
            "Considering the Function property in Client Actions, which of the following options is correct?",
        type: "single",
        options: [
            "Setting the Function property to Yes is not possible, if the Action is exposed to other modules as Public.",
            "Setting the Function property to No ensures the Action can only be used in the module where it is defined.",
            "Setting the Function property to Yes restricts the Action to have only one Output Parameter.",
            "Setting the Function property to No ensures the Action can only be used in Screen Expressions.",
        ],
        correct: [1], // Đáp án đúng là "Setting the Function property to No ensures the Action can only be used in the module where it is defined."
        explanation:
            "Setting the Function property to No restricts the action to be used only within the module where it is defined, meaning it can't be called from other modules.",
    },
    {
        question: "Which of the following would be a good use case for a Client Variable?",
        type: "single",
        options: ["Profile Picture", "Credit Card Number", "User Name", "User Identifier"],
        correct: [2], // Đáp án đúng là "User Name"
        explanation:
            "Client Variables are appropriate for storing temporary client-side data such as the user's name, which can be displayed or used within the client interface.",
    },
    {
        question:
            "Using an Ajax Refresh in the flow of a Screen Action allows refreshing a specific widget, but for it to work ...",
        type: "single",
        options: [
            "The widget must have a Name and the Screen Action must be executed with Submit.",
            "The widget must have a Name and the Screen Action must be executed with Navigate.",
            "The widget must have a Name and the Screen Action must be executed with Ajax Submit.",
            "The widget needs to be a Table Records and the Screen Action must be executed with Ajax Submit.",
        ],
        correct: [2], // Đáp án đúng là "The widget must have a Name and the Screen Action must be executed with Ajax Submit."
        explanation:
            "For an Ajax Refresh to work, the widget must be named and the Screen Action should be executed using the 'Ajax Submit' method, enabling a partial refresh.",
    },
    {
        question: "Different Exceptions are handled by different specific Handlers.",
        type: "single",
        options: ["Either", "True", "Neither", "False"],
        correct: [1], // Đáp án đúng là "True"
        explanation:
            "In Outsystems, different exceptions can be handled by specific exception handlers, allowing for tailored error handling.",
    },
    {
        question:
            "Considering the following Entities, what is required to create a many-to-many relationship between them?",
        type: "single",
        options: [
            "Create an attribute of type Order Identifier in the Product Entity and an attribute of type Product Identifier in the Order Entity.",
            "Create an attribute of type Product Identifier in the Order Entity.",
            "Create a third Entity that contains two attributes of types Order Identifier and Product Identifier.",
            "Create a third Entity with a primary key of type Order Identifier and an attribute of type Product Identifier.",
        ],
        correct: [2], // Đáp án đúng là "Create a third Entity that contains two attributes of types Order Identifier and Product Identifier."
        explanation:
            "To create a many-to-many relationship, you need a third entity (join table) containing foreign keys from both related entities (Order and Product).",
    },
    {
        question: "Static Entities are most similar to which other programming concept?",
        type: "single",
        options: ["Static variables.", "Linked lists.", "Hash Maps.", "Enumeration."],
        correct: [3], // Đáp án đúng là "Enumeration."
        explanation:
            "Static Entities are similar to Enumerations in programming because they represent a fixed set of predefined values.",
    },
    {
        question: "Which of the following options is false?",
        type: "single",
        options: [
            "Input Parameters allow passing data between Screens when navigating between them.",
            "When the value of a Local Variable changes the user interface reacts immediately.",
            "Local Variables allow temporarily storing relevant information inside a Screen.",
            "Local Variables from a Screen may be directly accessed from another Screen.",
        ],
        correct: [3], // Đáp án đúng là "Local Variables from a Screen may be directly accessed from another Screen."
        explanation:
            "Local Variables in Outsystems are specific to the Screen and cannot be accessed directly from another Screen. They are only used within the context of the screen where they are defined.",
    },
    {
        question: "List.Current in Aggregates will return the record at any position",
        type: "single",
        options: [
            "Returns an empty record",
            "Returns record at position list.count -1",
            "Returns record at position list.length - 1",
            "Returns the first record",
        ],
        correct: [1], // Đáp án đúng là "Returns record at position list.count -1"
        explanation:
            "List.Current returns the record at the last position of the list, which is typically at list.count - 1.",
    },
    {
        question: "Considering ListItem and List Actions, which of the following options is false?",
        type: "single",
        options: [
            "List Actions can only be used inside List Items.",
            "When List Items have the full swiping option activated, the List Action is not necessary.",
            "The List Action triggers a Screen Action that will have the logic to be executed on swipe.",
            "List Items can be used outside of Lists.",
        ],
        correct: [3], // Đáp án đúng là "List Items can be used outside of Lists."
        explanation:
            "List Items are specifically designed to be used inside Lists. They cannot be used effectively outside of a List component.",
    },

    {
        question: "Which of the following options is correct?",
        type: "single",
        options: [
            "Client Actions can call Screen Actions.",
            "Server Actions can call Client Actions.",
            "Client Actions can call Server Actions.",
            "Screen Actions can call other Screen Actions from a different screen.",
        ],
        correct: [0], // Đáp án đúng là "Client Actions can call Screen Actions."
        explanation:
            "Client Actions can indeed call Screen Actions, but Server Actions cannot directly call Client Actions.",
    },
    {
        question:
            "In a ReactiveWeb App, Data is requested asynchronously, thus allowing a more fluid experience.",
        type: "single",
        options: ["Either", "True", "Neither", "False"],
        correct: [1], // Đáp án đúng là "True"
        explanation:
            "In Reactive Web Apps, data is requested asynchronously, enhancing the user experience by allowing the UI to remain responsive while data is being fetched.",
    },
    {
        question:
            "Attributes of static entities can be mandatory or not. A value is only required to be set if the attribute is mandatory.",
        type: "single",
        options: ["True", "False"],
        correct: [0], // Đáp án đúng là "True"
        explanation:
            "In Outsystems, attributes in static entities can be either mandatory or optional. If the attribute is mandatory, a value must be provided.",
    },
    {
        question: "In the Screen lifecycle, the Preparation runs on the browser.",
        type: "single",
        options: ["FALSE", "TRUE"],
        correct: [0], // Đáp án đúng là "FALSE"
        explanation:
            "The Screen Preparation runs on the server, not in the browser. It is used to prepare data for rendering the screen.",
    },
    {
        question: "A one-to-one relationship from Entity A to Entity B is created by ...",
        type: "single",
        options: [
            "changing the id attribute of Entity B to not be an auto-number and assigning a value to it programmatically, when creating a new record.",
            "changing the Entity B identifier data type to <Entity A> Identifier.",
            "adding a new attribute to the Entity A with data type <Entity B> Identifier.",
            "adding a new attribute to the Entity B with data type <Entity A> Identifier.",
        ],
        correct: [3], // Đáp án đúng là "adding a new attribute to the Entity B with data type <Entity A> Identifier."
        explanation:
            "In a one-to-one relationship, you add an attribute in Entity B that refers to Entity A's identifier.",
    },
    {
        question: "Which of the following is the correct syntax for Entities and Attributes?",
        type: "single",
        options: [
            "(Entity).{Attribute}",
            "{Entity}.[Attribute]",
            "[Entity].{Attribute}",
            "Entity.Attribute",
        ],
        correct: [3], // Đáp án đúng là "Entity.Attribute"
        explanation:
            "The correct syntax to reference an entity's attribute in Outsystems is 'Entity.Attribute'.",
    },
    {
        question: "Which of the following is not a Development Environment?",
        type: "single",
        options: ["Integration Studio", "Service Center", "Service Studio"],
        correct: [1], // Đáp án đúng là "Service Center"
        explanation:
            "Service Center is an environment for managing and monitoring applications, while Integration Studio and Service Studio are used for developing applications.",
    },
    {
        question: "Which of the following options is a valid usage of the Trigger Event node?",
        type: "single",
        options: [
            "The Trigger Event allows a Block to notify its children (other Blocks) that something relevant occurred in the scope of the Block.",
            "The Trigger Event allows a Screen to notify its children (Blocks) that something relevant occurred in the scope of the Screen.",
            "The Trigger Event allows a Screen to notify its parent (Screen or Block) that something relevant occurred in the scope of the Screen.",
            "The Trigger Event allows a Block to notify its parent (Screen or Block) that something relevant occurred in the scope of the Block.",
        ],
        correct: [3], // Đáp án đúng là "The Trigger Event allows a Block to notify its parent (Screen or Block) that something relevant occurred in the scope of the Block."
        explanation:
            "The Trigger Event allows a Block to notify its parent about changes or events within the Block, which can be handled by the parent.",
    },
    {
        question: "Regarding the Switch statement, which of the following options is false?",
        type: "single",
        options: [
            "The first branch that the condition evaluates to True is executed.",
            "Every branch that evaluates to True is executed.",
            "If no branch evaluates to True, the Otherwise branch is executed.",
            "The Otherwise branch must exist.",
        ],
        correct: [3], // Đáp án đúng là "The Otherwise branch must exist."
        explanation:
            "The Otherwise branch is optional in a Switch statement. It is only used when no other branches evaluate to true.",
    },
    {
        question: "How is the data fetched by an Aggregate bound to a Table or a List widget?",
        type: "single",
        options: [
            "The binding is done automatically since the Aggregate is in the scope of the Screen.",
            "By creating a Screen Action that programmatically assigns the widget to the data fetched by the Aggregate.",
            "By setting the Source property of the widget to the output of the Aggregate.",
            "By adding an Expression inside the widget that refers to an attribute of the data fetched by the Aggregate.",
        ],
        correct: [2], // Đáp án đúng là "By setting the Source property of the widget to the output of the Aggregate."
        explanation:
            "In Outsystems, the data fetched by an Aggregate is bound to a widget, such as a Table or List, by setting the widget's Source property to the output of the Aggregate.",
    },

    {
        question: "When consuming a REST API, we can consume a single REST method ...",
        type: "single",
        options: [
            "Provide the WSDL (the endpoint URL or upload file), choose the binding (if there's more than one), and choose the method to consume.",
            "Provide the method's URL, fill the parameter values (if any), test it to get the JSON response, and copy the JSON response to the Body.",
        ],
        correct: [1], // Đáp án đúng là "Provide the method's URL, fill the parameter values (if any), test it to get the JSON response, and copy the JSON response to the Body."
        explanation:
            "To consume a REST API, you typically provide the URL, parameters, test it, and then use the response in the Body of the request.",
    },
    {
        question: "Select the correct option regarding Server Actions.",
        type: "single",
        options: [
            "Setting the Public property to Yes requires the Server Action to have at least one Input or Output Parameter.",
            "Setting the Function property to Yes requires the Server Action to have only one Output Parameter.",
            "It is not possible to set both Public and Function properties to Yes at the same time.",
            "All Server Actions must have at least one Input or Output Parameter.",
        ],
        correct: [0], // Đáp án đúng là "Setting the Public property to Yes requires the Server Action to have at least one Input or Output Parameter."
        explanation:
            "When setting a Server Action to 'Public', it must have at least one Input or Output parameter to allow communication with other modules.",
    },
    {
        question: "Which of the following commands is not available in the OutSystems debugger?",
        type: "single",
        options: ["Step Over", "Stop Debugging", "Restart Debugging", "Continue Request"],
        correct: [3], // Đáp án đúng là "Continue Request"
        explanation:
            "'Continue Request' is not a debugger command. The OutSystems debugger includes 'Step Over', 'Stop Debugging', and 'Restart Debugging'.",
    },
    {
        question:
            "The 'Delete' Delete Rule property option does not ensure referential integrity in the relationship and should be used with caution.",
        type: "single",
        options: ["True", "False"],
        correct: [0], // Đáp án đúng là "True"
        explanation:
            "The 'Delete' Delete Rule option does not enforce referential integrity, so it can lead to orphaned records in the database.",
    },
    {
        question: "Which event is used to set focus on one particular widget?",
        type: "single",
        options: ["After Fetch", "Destroy", "Ready", "Render"],
        correct: [2], // Đáp án đúng là "Ready"
        explanation:
            "The 'Ready' event is typically used to set focus to a widget after the screen has been prepared but before it is rendered to the user.",
    },
    {
        question: "Which of the following options is false regarding Modules and applications?",
        type: "single",
        options: [
            "Modules can be of different types, such as Reactive Web App, Blank, or Extension.",
            "A Module that reuses an element from another Module is called a Consumer.",
            "An application is composed of a set of Modules.",
            "Elements can be exposed and reused, but only within the same application.",
        ],
        correct: [3], // Đáp án đúng là "Elements can be exposed and reused, but only within the same application."
        explanation:
            "Elements can be exposed and reused across different applications, not just within the same application.",
    },
    {
        question: "Entities and Attributes are created in the database as ...",
        type: "single",
        options: [
            "Indexes and Columns",
            "Tables and Constraints",
            "Tables and Columns",
            "Tables and Indexes",
        ],
        correct: [2], // Đáp án đúng là "Tables and Columns"
        explanation:
            "Entities and attributes are mapped to tables and columns in the underlying database.",
    },
    {
        question: "Regarding Session LifeCycle, which of the following options is true?",
        type: "single",
        options: [
            "Default Session time out after 20 minutes. But can configure on service center.",
            "The session starts (start) after the user logs in successfully",
            "Can send web session information via URL",
            "A Web Service session starts (start) when it is called and can last until time out when the value of the Persistent property is set to Yes.",
        ],
        correct: [0], // Đáp án đúng là "Default Session time out after 20 minutes. But can configure on service center."
        explanation:
            "The default session timeout is 20 minutes, but it can be configured in Service Center.",
    },
    {
        question:
            "Mobile Apps have access to local storage and can be developed to work offline, online, or in both scenarios.",
        type: "single",
        options: ["Either", "True", "Neither", "False"],
        correct: [1], // Đáp án đúng là "True"
        explanation:
            "Mobile apps can indeed be designed to work offline, online, or both by using local storage and network requests.",
    },
    {
        question: "Email, Phone number is Basic data type?",
        type: "single",
        options: ["No", "Yes"],
        correct: [0], // Đáp án đúng là "No"
        explanation:
            "Email and phone numbers are not basic data types. They are typically stored as strings or specific types like 'Text' or 'Phone' in databases.",
    },

    {
        question:
            "What type of Validation must be selected before the error is displayed directly below the defective item?",
        options: ["Client", "Client & Server", "Server", "All right"],
        correct: [0],
        explanation:
            "Client validation must be used to display error messages directly below the defective item, ensuring it is validated before submitting to the server.",
    },
    {
        question:
            "When there is a change in the Producer module, which statement later about the Consumer module is correct?",
        options: [
            "When adding the output of Server action, the consumer will get an error if the Producer is not updated",
            "When changing the internal logic of a server action without changing the input-output, Consumer still uses the latest logic",
            "When deleting the input of the Server action, the consumer will get an error if the Producer is not updated",
            "When changing the content of the web screen, the Consumer is still not affected even without updating Producer",
        ],
        correct: [2],
        explanation:
            "When deleting an input of a Server action, the consumer will get an error if the Producer is not updated. This is because the consumer expects the input to be there.",
    },
    {
        question:
            "To replace data on a widget with automatic data replacement (Tables Records, List Records, Form, ...)",
        options: [
            "Drag your Entity and drop it onto the widget.",
            "Delete the widget and create it again with the right Entities.",
            "Right-click on the widget and select Import Data from Entity",
            "Right-click on the Entity and select Import Data from Excel.",
        ],
        correct: [0],
        explanation:
            "To replace data on a widget, you can drag your Entity and drop it onto the widget, which will automatically replace the data with the new source.",
    },
    {
        question: "Screen and Web Block has no output parameter?",
        options: ["True", "False"],
        correct: [1],
        explanation:
            "Both Screen and Web Block can have output parameters. They can be used to return values from a Screen or Block.",
    },
    {
        question: "Regarding exposing elements in Producer modules...",
        options: [
            "Only elements with the Public property set to Yes can be exposed and reused by modules of any application.",
            "Any element can be exposed, and reused by modules of any application.",
            "Any element can be exposed, and reused, but only by modules of the same application.",
            "Only elements with the Public property set to Yes can be exposed and reused, but only by modules of the same application.",
        ],
        correct: [0],
        explanation:
            "Only elements with the Public property set to Yes can be exposed and reused by modules of any application, enabling sharing across different modules.",
    },
    {
        question:
            "When the event is mandatory, a Block event such as the Client Action must be specified to handle the event. Although it may be empty.",
        options: ["True", "False"],
        correct: [0],
        explanation:
            "A mandatory event in a Block must have a Client Action specified to handle the event, even if the action is empty.",
    },
    {
        question: "Considering the built-in Role Actions, which of the following options is false?",
        options: [
            "The GrantRole Action allows to grant a Role to a user programmatically.",
            "The CheckRole Action checks if a user has that particular Role.",
            "The RevokeRole Action allows to remove a Role from a user programmatically.",
            "The CreateUserWithRole Action creates an end-user and assigns it the Role.",
        ],
        correct: [3],
        explanation:
            "The CreateUserWithRole Action does not exist as a built-in Role Action. Users are created separately and roles can be assigned afterward.",
    },
    {
        question:
            "How would you change the following Aggregate to return the number of orders per priority?",
        options: [
            "Create a Group By over the Priority.Id attribute and a Count over the Order.Id attribute.",
            "Remove the Join between the Order and the OrderStatus and create a Count over the Priority.Id attribute.",
            "Create a GroupBy over the Order.Id attribute and a Count over the Priority.Id attribute.",
            "Change the Join between the Order and the Priority to Only With and create a Count over the Priority.Id attribute.",
        ],
        correct: [0],
        explanation:
            "To return the number of orders per priority, create a Group By over the Priority.Id attribute and a Count over the Order.Id attribute.",
    },
    {
        question:
            "Which of the following options is correct regarding the Valid property of the Form?",
        options: [
            "When built-in validations are enabled, the Valid property of the Form is automatically checked before executing the client action logic.",
            "The Valid property of the Form should be explicitly set to False (e.g. with an Assign) when an input field is not valid.",
            "The Valid property of the Form should be checked after the last custom validation.",
            "It is only changed to False when all the input fields of the Form are not valid.",
        ],
        correct: [0],
        explanation:
            "When built-in validations are enabled, the Valid property of the Form is automatically checked before executing client action logic to ensure the form's validity.",
    },
    {
        question: "Regarding Table Records Widget, which of the following options is true?",
        options: [
            "Bound to a Source Record List",
            "Bound to a Source List",
            "Bound to a Source Record",
        ],
        correct: [1],
        explanation:
            "The Table Records widget is bound to a Source List, which is typically a list of records that will be displayed in the table.",
    },

    {
        question: "Is it possible to Expose a REST API in OutSystems?",
        type: "single",
        options: ["No", "Yes"],
        correct: [1],
        explanation:
            "OutSystems supports exposing REST APIs, allowing integration with other systems.",
    },
    {
        question:
            "What is the Screen behavior when a widget is not valid (Valid property set to False)?",
        type: "single",
        options: [
            "The widget does not appear on the Screen and the validation message appears in its place.",
            "The Screen displays the widget greyed out, and displays the validation error message on the input.",
            "Displays the regular widget, applies a specific styling (e.g. red border), and displays the validation error message.",
            "Displays the regular widget and displays the validation error message when we hover the mouse.",
        ],
        correct: [2],
        explanation:
            "When a widget is invalid, it is typically shown with visual cues (like a red border) and the error message is displayed to guide the user.",
    },
    {
        question: "Recursion is allowed when using blocks.",
        type: "single",
        options: ["True", "False"],
        correct: [1],
        explanation:
            "OutSystems does not allow recursive Web Blocks to avoid infinite rendering loops.",
    },
    {
        question:
            "During the 1-Click Publish, your application data model, code, and interface is compiled and generates .NET code, HTML, JavaScript and CSS. True or False?",
        type: "single",
        options: ["True", "False"],
        correct: [0],
        explanation:
            "OutSystems 1-Click Publish compiles your entire app including the UI, logic and data model into optimized code.",
    },
    {
        question: "Regarding Screen Aggregates, which of the following options is false?",
        type: "single",
        options: [
            "Screen Aggregates only exist within the scope of the Screen where they were defined.",
            "Screen Aggregates can only fetch data from the database.",
            "Screen Aggregates run asynchronously and in parallel.",
            "Screen Aggregates can only be executed when explicitly called.",
        ],
        correct: [3],
        explanation:
            "Screen Aggregates are executed automatically when the screen loads; no explicit call is needed.",
    },
    {
        question: "A Screen Preparation...",
        type: "single",
        options: [
            "cannot execute other Server Actions.",
            "requires at least one Input Parameter to filter the queries to the database.",
            "does not have Output Parameters.",
            "is mandatory for every Web Screen.",
        ],
        correct: [2],
        explanation:
            "Screen Preparation doesn’t have output parameters but can call other server actions and is optional.",
    },
    {
        question:
            "To speed up application development, OutSystems has pre-built screens with logic and data for typical scenarios",
        type: "single",
        options: ["FALSE", "TRUE"],
        correct: [1],
        explanation:
            "OutSystems provides templates and scaffolding to accelerate development for common use cases.",
    },
    {
        question:
            "The On Click properties allow defining the behavior of Links and Buttons and ...",
        type: "single",
        options: [
            "Links and Buttons can only Navigate to screens.",
            "Buttons can only Submit requests.",
            "Links can only Navigate to Screens.",
            "Links and Buttons can either Navigate to screens or Submit requests.",
        ],
        correct: [3],
        explanation:
            "Both Links and Buttons in OutSystems can be configured to navigate or trigger actions such as submitting requests.",
    },
    {
        question:
            "Using a template to create a screen, the information on the screen is using sample data. When you want to perform replacing Sample Data with real data, which of the following expressions is correct",
        type: "single",
        options: [
            "When performing replacing, the field of sample data and real data is not mapping, the outsystem will automatically fix the database so that it can perform the replacing.",
            "When performing replacing, the field of sample data and real data is not mapping, the outsystem will notify errors and warnings to the user",
            "OutSystem does not support replacing sample data",
            "When replacing, the field of sample data and real data without mapping will not be able to replace",
        ],
        correct: [3],
        explanation:
            "OutSystems cannot map and replace data if the fields between sample data and real data do not match.",
    },
    {
        question: "Regarding Web Blocks in Outsystems, select to statement that is true.",
        type: "single",
        options: [
            "Web Block cannot contain other web blocks",
            "Web Block cannot be placed recursively (recursion not allowed)",
            "Web Block can only be shared for modules that belong to the same application",
            "Web Block has no preparation action",
        ],
        correct: [1],
        explanation: "Web Blocks cannot call themselves recursively to prevent infinite rendering.",
    },

    {
        question:
            "In the following scenario, we are implementing the ColorsDropdown widget which will allow a user to select a color. What should be set in the Options Text property to make sure that the names of the colors appear in the dropdown?",
        type: "single",
        options: ["Color.Label", "GetColors.Color.Label", "Color", "Color.Id"],
        correct: [1],
        explanation:
            "The Options Text should use 'GetColors.Color.Label' to reference the label for each color in the dropdown.",
    },
    {
        question:
            "There are no errors in Service Studio, but when the user selects a new page in the pagination widget the results do not change on the Table. What is the reason for that behavior?",
        type: "single",
        options: [
            "The Max Records property of the Pagination should be set to GetMovies.Count and the TotalCount to RecordsPerPage.",
            "The Max. Records of the Aggregate should be equal to the total number of movies in the database.",
            "The Table is not being refreshed on the OnNavigate Action.",
            "The GetMovies Aggregate is not being refreshed in the OnNavigate Action.",
        ],
        correct: [3],
        explanation:
            "If the aggregate (GetMovies) is not refreshed on page change, the table will not display updated data.",
    },
    {
        question:
            "Business concepts that need to be stored and accessed in our applications should be modeled as...",
        type: "single",
        options: ["Entities.", "Database tables.", "Entity relationships.", "Entity diagrams."],
        correct: [0],
        explanation:
            "In OutSystems, real-world concepts should be modeled as Entities, which translate into tables in the database.",
    },
    {
        question: "Input parameters are always mandatory",
        type: "single",
        options: ["FALSE", "TRUE"],
        correct: [0],
        explanation:
            "Input parameters can be optional; their mandatory nature depends on how they're configured.",
    },
    {
        question: "In a Web Application, a Screen Action...",
        type: "single",
        options: [
            "can terminate with End, Destination, Download or Raise Exception Statements.",
            "cannot have multiple termination statements.",
            "can have multiple termination statements, but none of them can be a Destination statement.",
            "must always terminate with an End statement.",
        ],
        correct: [0],
        explanation:
            "Screen Actions can end in several ways: End, Destination, Download, or Raise Exception.",
    },
    {
        question: "Regarding the If statement, which of the following options is false?",
        type: "single",
        options: [
            "Both True and False branches are mandatory.",
            "Only one of the branches is executed, depending on the If condition's outcome.",
            "More branches may be added if needed.",
            "If statements can also be used to implement ad-hoc loops.",
        ],
        correct: [3],
        explanation: "If statements are conditional; they cannot be used for loops.",
    },
    {
        question: "Does OutSystems manage the underlying database tables for the developer?",
        type: "single",
        options: ["No", "Yes"],
        correct: [1],
        explanation:
            "OutSystems automatically manages the database schema based on the defined entities and attributes.",
    },
    {
        question:
            "When data is sent to the server with the Submit method, OutSystems has built-in validations that validate ...",
        type: "single",
        options: [
            "Mandatory values, correct Data Types, and Business Rules.",
            "Mandatory values and Business Rules.",
            "Correct Data Types and Business Rules.",
            "Mandatory values and correct Data types.",
        ],
        correct: [3],
        explanation:
            "OutSystems performs automatic validation for required fields and data types before submission.",
    },
    {
        question: "OutSystems provides two built-in Roles: Anonymous and Registered",
        type: "single",
        options: [
            "No, there's only one role: Anonymous.",
            "No, there's only one role: Registered.",
            "Yes, Anonymous for unknown users and Registered for users registered in the Users application.",
        ],
        correct: [2],
        explanation:
            "OutSystems includes two default roles to manage access: Anonymous and Registered.",
    },
    {
        question:
            "Which of the following mappings between OutSystems and the Database is NOT correct?",
        type: "single",
        options: [
            "Attributes - Column.",
            "Index - Index.",
            "Entities - Tables.",
            "Reference attribute - Primary Key.",
        ],
        correct: [3],
        explanation: "A reference attribute maps to a foreign key, not a primary key.",
    },

    {
        question: "The Checkbox or Switch Widgets are bound to a variable of which type?",
        type: "single",
        options: ["Date", "Boolean", "Text", "Integer"],
        correct: [1],
        explanation: "Checkbox and Switch widgets are binary and bind to Boolean variables.",
    },
    {
        question:
            "When using a Popup_Editor, consider that you implement a Screen Action in the Popup Screen that requires Source Screen to be refreshed. How would you implement that Screen Action?",
        type: "single",
        options: [
            "You use the Popup_Editor_Notify for the Popup Screen to notify the Source Screen, followed by the Popup_Editor_... the Popup",
            "You use the Popup_Editor_Notify for the Popup Screen to notify the Source Screen, followed by the Popup_Editor_... the Popup and an Ajax Refresh to refresh the Source Screen.",
            "You use the Popup_Editor_Notify for the Popup Screen to notify the Source Screen and close the Popup.",
            "You use the Popup_Editor_Close to close the Popup, followed by the Ajax Refresh to refresh the Source Screen.",
        ],
        correct: [1],
        explanation:
            "The correct approach is to notify the source screen and refresh it with Ajax after closing the popup.",
    },
    {
        question: "OutSystems, an Entity Identifier ...",
        type: "single",
        options: [
            "... must be set to Auto Number.",
            "... can only be a single attribute.",
            "... is created automatically and cannot be modified.",
            "... must have its Data Type set to Long Integer.",
        ],
        correct: [1],
        explanation:
            "Entity identifiers must be a single attribute, but the developer can configure it (e.g., auto-number or manually assigned).",
    },
    {
        question: "Regarding Preparation in Outsystems, select the statement that is true.",
        type: "single",
        options: [
            "Preparation action may have multiple outputs",
            "The preparation action can only have 1 output",
            "Screen may not need Preparation",
            "Preparation is a forced action of Screen and webBlock",
        ],
        correct: [2],
        explanation:
            "Not all Screens or Web Blocks require Preparation; it’s used when initial logic/data loading is needed.",
    },
    {
        question: "Regarding REST API in Outsystems, select the statement that is true.",
        type: "single",
        options: [
            "A REST API Method can both have an OnBeforeRequest action and an OnAfterResponse action",
            "The output of a method must have a text type",
            "A REST API can have OnBeforeRequest, but OnAfterResponse is a call back action for the method",
            "A REST API can both have OnBeforeRequest and can have OnAfterResponse",
        ],
        correct: [3],
        explanation:
            "OutSystems supports both OnBeforeRequest and OnAfterResponse events in REST API methods.",
    },
    {
        question:
            "The Combo Box widget allows selecting one value out of possible alternatives in a drop-down list. Which of the following is NOT POSSIBLE?",
        type: "single",
        options: [
            "Use the Special List section to get the alternatives from an Entity or a Static Entity.",
            "Use the Source Entity property to get the alternatives from an Entity or a Static Entity.",
            "Use the Source Record List property to get the alternatives from a List of Record.",
            "Use the Special List section to manually set special alternatives",
        ],
        correct: [1],
        explanation:
            "There is no 'Source Entity' property for Combo Box. You use the 'Source Record List' to populate it.",
    },
    {
        question:
            "When using an aggregate function like Sum, Average, Min, Max or Count on an attribute...",
        type: "single",
        options: [
            "Only the resulting aggregated attribute is part of the Aggregate output",
            "The resulting aggregate attribute is added to the Aggregate output alongside the rest of the entity attributes.",
        ],
        correct: [0],
        explanation:
            "Aggregates return only the calculated value when using aggregate functions like Sum or Count.",
    },
    {
        question:
            "What's the correct screen lifecycle order after clicking a Button with the Navigate method?",
        type: "single",
        options: [
            "Render Destination Screen then run its Preparation.",
            "Run Screen Action, run Preparation and render the Destination Screen.",
            "Run Preparation then render the destination Screen.",
            "Run Preparation then run the Screen Action",
        ],
        correct: [1],
        explanation:
            "First, the screen action runs, then the preparation of the destination screen, then it renders.",
    },
    {
        question:
            "When you create a new Web Screen, it has a Header, Menu and Footer by default because...",
        type: "single",
        options: [
            "All Screens must have a Header, Menu and Footer.",
            "All Screens are created that way even in Blank modules.",
            "It is built with a layout Web Block, that has placeholders for those Web Blocks.",
            "All Screens have three Containers for those Web Blocks.",
        ],
        correct: [2],
        explanation:
            "By default, screens use a layout Web Block that includes Header, Menu, and Footer placeholders.",
    },
    {
        question:
            "Consider the following Action that calculates the square root (sqrt) of a positive decimal number (N). Knowing that the function was called with N = 0, and the debugger is stopped at the Start node, what will happen when the developer selects the Continue (F9) option highlighted in the picture?",
        type: "single",
        options: [
            "The Action will throw an exception and sqrt will have no value.",
            "The debugger will stop at the breakpoint in the End node.",
            "The Action will end, with sqrt = 0.",
            "The debugger will stop in the N < 0 If node.",
        ],
        correct: [2],
        explanation:
            "The square root of 0 is 0, and since it's not less than 0, the action proceeds to assign sqrt = 0 and ends.",
    },

    {
        question: "Which of the following options is false regarding Screen Aggregates?",
        type: "single",
        options: [
            "A Screen Aggregate can be triggered when a screen is initializing or only On Demand.",
            'The Render Event on the Screen is triggered when an Aggregate with the Fetch property set to "only on demand" finishes its execution.',
            "The On After Fetch Event is triggered for every Aggregate, regardless of its Fetch property.",
            "All Aggregates, by default, have the Fetch property set to On Demand.",
        ],
        correct: [3],
        explanation: "By default, Aggregates are fetched on screen load (not On Demand).",
    },
    {
        question: "What is the output of an aggregate when no records meet the criteria?",
        type: "single",
        options: [
            "List has a record with default data",
            "List has an empty record",
            "Empty list",
            "Null List",
        ],
        correct: [2],
        explanation: "If no records match, the aggregate returns an empty list.",
    },
    {
        question: "Which of the following options should not be a use case of client variables?",
        type: "single",
        options: ["Password.", "Username.", "Search filter keyword.", "ID of a user session."],
        correct: [0],
        explanation:
            "Sensitive data like passwords should not be stored in client variables for security reasons.",
    },
    {
        question: "Inside an Action flow...",
        type: "single",
        options: [
            "... the Exception Handler flow can't intersect other flows.",
            "... only one Exception Handler may exist.",
            "... it's mandatory to have at least one Exception Handler.",
        ],
        correct: [1],
        explanation: "Only one Exception Handler is allowed per action flow in OutSystems.",
    },
    {
        question: "When Preparation is executed?",
        type: "single",
        options: [
            "When the User Request web page, when pressing the button (with method Submit)",
            "When the User Request web page, when pressing the button (with method Ajax Submit)",
        ],
        correct: [0],
        explanation:
            "Preparation runs before the screen is shown, typically when the page is requested (i.e., on initial load).",
    },
    {
        question: "Regarding List_SortColumn, which of the following options is true?",
        type: "single",
        options: [
            'Set the Column to "{EntityName}.{AttributeName}" & Automatic add a dynamic sort',
            'Set the Column to "{EntityName}.{AttributeName}" & define a dynamic sort',
            'Set the Column to "{EntityName}.[AttributeName]" & Automatic add a dynamic sort',
            'Set the Column to "{EntityName}.[AttributeName]" & define a dynamic sort',
        ],
        correct: [1],
        explanation:
            "The correct format is with dot notation `{EntityName}.{AttributeName}` and you manually define sorting behavior.",
    },
    {
        question:
            "What do you need to do to ensure that only authenticated users (with a username and password) can access your application?",
        type: "single",
        options: [
            'Create a new Role in your application, change its name to "Authenticated Users", and check it on all Screens.',
            "Check the Anonymous role on all Screens.",
            "Uncheck the Anonymous role on all Screens.",
            'Create a new Role in the Users application, change, its name to "Authenticated Users", and check it on all Screens.',
        ],
        correct: [2],
        explanation: "To prevent anonymous access, uncheck the 'Anonymous' role on all screens.",
    },
    {
        question:
            "Considering Aggregates and the SQL Tool, which of the following is the correct option?",
        type: "single",
        options: [
            "Attribute grouping can only be done with the SQL Tool.",
            "All queries that can be written in an SQL Tool can be defined in an Aggregate.",
            "Joins between entities can only be defined in Aggregates.",
            "The SQL Tool allows to write queries that contain sub-queries.",
        ],
        correct: [3],
        explanation:
            "SQL Tool gives flexibility to write sub-queries, which is not possible in Aggregates.",
    },
    {
        question:
            "Create unique customer index with 2 fields Name and Email. When performing any insert data below, an error will occur",
        type: "single",
        options: [
            "(Jonh,jonh@gmail.com,1122), (Jonh,jonh@gmail.com,3344)",
            "(Jonh.jonh@gmail.com,1122), (Jonh_Hand,jonh@gmail.com,1122)",
            "(Jonh,jonh@gmail.com,1122), (Jonh_Hand,jonh@gmail.com,3344)",
            "(Jonh,jonh@gmail.com,1122), (Jonh,jonh_hand@gmail.com,1122)",
        ],
        correct: [0],
        explanation:
            "Because Name + Email must be unique, inserting the same combination will cause a violation.",
    },
    {
        question:
            "To create a menu option for a Screen, just drag and drop that Screen onto the Menu",
        type: "single",
        options: ["FALSE", "TRUE"],
        correct: [1],
        explanation:
            "In OutSystems, dragging a screen onto the menu automatically creates a menu link.",
    },

    {
        question: "The Expression widget...",
        type: "single",
        options: [
            "displays only static text.",
            "displays text calculated at runtime.",
            "displays only the result of mathematical expressions.",
        ],
        correct: [1],
        explanation:
            "The Expression widget is used to display values calculated at runtime, including text, numbers, etc.",
    },
    {
        question: "To restrict access to a Web Screen...",
        type: "single",
        options: [
            "Select the Role in the Web Screen Properties pane and OutSystems will automatically check the Role at runtime.",
            "Go to the Users application and associate the Web Screen to a specific role.",
        ],
        correct: [0],
        explanation:
            "Roles are assigned to screens via the properties pane, and OutSystems enforces access control automatically.",
    },
    {
        question: "The lifecycle of a User Session...",
        type: "single",
        options: [
            "Starts when the user authenticates in the application and ends with a logout or a timeout.",
            "Starts on the first access to the application (even if anonymous) and never ends.",
            "Starts when the user authenticates in the application and never ends.",
            "Starts on the first access to the application (even if anonymous) and ends with a logout or a timeout.",
        ],
        correct: [0],
        explanation:
            "User Sessions in OutSystems begin on authentication and end on logout or timeout.",
    },
    {
        question:
            "Consider a Form with a Save button with the Built-in Validations property set to Yes. When a user clicks on the Save button, some validations over the data submitted to the Form are automatically performed by OutSystems by default. Which validations are those?",
        type: "single",
        options: [
            "Check if the mandatory fields are filled in and if the data submitted by the user matches the data type expected in the input fields.",
            "Check if the mandatory fields are filled in and if the data submitted by the user matches the data type of the Form's data source.",
            "Check if the mandatory fields are filled in and if the non-mandatory fields, that are later used in the logic, are also filled in.",
            "Check if the mandatory fields are filled in.",
        ],
        correct: [0],
        explanation:
            "Built-in validations check required fields and data types against the input fields' expected types.",
    },
    {
        question:
            "Consider the Action called Absolute which returns an absolute value (abs) of a number N passed as Input Parameter. When does the Action return 0?",
        type: "single",
        options: [
            "When the input parameter (N) is less than zero.",
            "When the input parameter (N) is greater than zero.",
            "When the input parameter (N) is zero.",
            "Never.",
        ],
        correct: [2],
        explanation: "The absolute value of 0 is 0. That's when the action returns 0.",
    },
    {
        question:
            "Considering a Button in a Screen, which of the following options cannot be set as its On Click Destination?",
        type: "single",
        options: ["Block.", "External Site.", "Screen.", "Client Action."],
        correct: [0],
        explanation:
            "Blocks cannot be set as a navigation destination; only screens, external sites, or actions are valid.",
    },
    {
        question: "Roles are created in applications and user authorizations are managed...",
        type: "single",
        options: [
            "Only manually in the Users application.",
            "Only programmatically using the Grant... and Revoke... role actions.",
            "Manually in the Users application or programmatically.",
        ],
        correct: [2],
        explanation:
            "Roles can be assigned manually through the Users app or programmatically with grant/revoke actions.",
    },
    {
        question:
            "ABC screen only Registered role is checked, which of the following statements is true?",
        type: "single",
        options: [
            "User logged, make request Screen ABC. As a result, can not permission",
            "User has not logged in, make request Screen ABC. As a result, can not permission",
        ],
        correct: [1],
        explanation:
            "If the 'Registered' role is required, unauthenticated (not logged-in) users will be denied access.",
    },
    {
        question: "Regarding non-SELECT queries, which of the following options is correct?",
        type: "single",
        options: [
            "It is not possible to execute DELETE queries with the SQL Tool.",
            "It is mandatory to set the Output Entity or Structure.",
            "It is mandatory to specify all Attributes in an INSERT query.",
            "It is not possible to use Query Parameters in Non-SELECT queries.",
        ],
        correct: [2],
        explanation:
            "In INSERT queries, you must specify values for all non-nullable attributes unless they have defaults.",
    },
    {
        question: "In an Aggregate, the Sources section is used for ...",
        type: "single",
        options: [
            "Define the order of the output records of the Aggregate.",
            "Define the Entities we want retrieve records from.",
            "Define conditions to get specific subsets of records.",
            "Define values for testing the output records of the Aggregate.",
        ],
        correct: [1],
        explanation:
            "The Sources section defines which Entities or Joins the Aggregate is based on.",
    },

    {
        question:
            "Start -> If(Count < 3) True Count = Count + 1, Result = Result + Count. If end loop Result is value = ?",
        type: "single",
        options: ["8", "6", "5", "7"],
        correct: [1],
        explanation:
            "Count starts at 0. First loop: Count=1, Result=1. Second loop: Count=2, Result=3. Third loop: Count=3, Result=6. Then condition fails. Final Result = 6.",
    },
    {
        question:
            "In a Many-to-Many relationship, the Junction Entity must have at least these attributes ...",
        type: "single",
        options: [
            "Foreign keys to each parent Entity and the Count of the junction records.",
            "An identifier and foreign keys to each parent Entity.",
            "A composite key with reference to each parent Entity.",
            "Id, Label, Order, Is Active.",
        ],
        correct: [1],
        explanation:
            "A junction entity in OutSystems should have an identifier and foreign keys to each parent entity.",
    },
    {
        question:
            "In the Web Blocks section of the Theme properties, does changing the Layout web block mean changing the layout of existing screens?",
        type: "single",
        options: ["No", "Yes"],
        correct: [0],
        explanation:
            "Changing the layout in the theme only affects newly created screens, not existing ones.",
    },
    {
        question: "Regarding Indexes, which of the following options is correct?",
        type: "single",
        options: [
            "Unique indexes help prevent data duplication.",
            "Indexes over referenced attributes cannot be deleted.",
            "Indexes speed up data retrieval without any kind of impact.",
            "Custom indexes cannot be added to an Entity.",
        ],
        correct: [0],
        explanation:
            "Unique indexes enforce uniqueness of column values and help prevent duplication.",
    },
    {
        question: "Which of the following behaviors is true for Links and Buttons?",
        type: "single",
        options: [
            "Links and Buttons can either Navigate to screens or trigger Screen Actions.",
            "Only Links can navigate to external URLs.",
            "Links can only navigate to Screens.",
            "Buttons can only have a Screen Action as an On Click Destination.",
        ],
        correct: [0],
        explanation: "Both Links and Buttons can be configured to navigate or run actions.",
    },
    {
        question:
            "If you want to move from a webPage A to a WebPage B by clicking the Submit button, execute the Destination setting in the screen action of the Submit button as webpage B. Which of the following statements is correct?",
        type: "single",
        options: [
            "When the Submit button is pressed, perform the screen action of the Submit button and then build the screen of webpage B, the webpage's preperation will not be performed.",
            "When clicking the Submit button, it will perform the screen action of the Submit button, then perform the preperation of the webpage B and then build the webpage screen B",
            "When clicking Submit button, it will immediately perform preperation of webpage B and then build screen of webpage B, screen action of Submit button will not be performed.",
            "When you press the Submit button, you will perform the webpage B's preperation, then build the webpage of the webpage B, then perform the screen action of the Submit button.",
        ],
        correct: [1],
        explanation:
            "Screen actions run first, then the destination screen's preparation runs and renders.",
    },
    {
        question: "The Table Records widget...",
        type: "single",
        options: [
            "Displays records in a tabular layout, one per table.",
            "Displays records in a tabular layout, one per row.",
            "Displays records in a tabular layout, one per column.",
            "Displays records in a free-form format.",
        ],
        correct: [1],
        explanation:
            "Table Records displays a list of records where each record occupies a single row.",
    },
    {
        question: "When debugging does not affect other people, what mode to use",
        type: "single",
        options: ["Personal Area", "Public Area", "Both (Personal Area or Public Area)"],
        correct: [0],
        explanation:
            "Personal Area allows debugging changes without impacting other users or the main application.",
    },
    {
        question: "Regarding Web Blocks in Outsystems, select to statement that is true.",
        type: "single",
        options: [
            "When the web block is in one screen or another web block, the parent screen or web block is not required to take action to handle the event of the child web block.",
            "When the web block is in a web block, the parent web block is required to have a screen action to handle the event of the child web block, but the case is in another screen.",
            "When the web block is in one screen, the parent screen is required to have a screen action to handle the event of the child web block, but the case is in another web block.",
            "When the web block is in one screen or another web block, the parent screen or web block is required to have a screen action to handle the event of the child web block.",
        ],
        correct: [3],
        explanation:
            "Event bubbling in OutSystems requires parent components (screens or web blocks) to handle child events.",
    },
    {
        question: "Regarding Static Entities in Outsystems, select to statement that is true.",
        type: "single",
        options: [
            "A Static Entity always has only 4 attributes Id, Label, Order, Is_Active",
            "A Static Entity can add attributes with the basic data type and the identifier data type of other static entity.",
            "A Static Entity can add attributes with the basic data type and identifier data type of all other entities.",
            "A Static Entity has the functions Create, Update, Get",
        ],
        correct: [1],
        explanation:
            "Static Entities can include attributes with basic types or identifiers of other Static Entities.",
    },

    {
        question: "When the user submits data in a Form to the server...",
        type: "single",
        options: [
            "... the Preparation runs then the Screen Action runs.",
            "... the data is stored in the Form's Record implicit variable.",
            "... the data in the Form is only available in the Preparation.",
            "A Screen Action runs with the data from the Form as Input parameter.",
        ],
        correct: [3],
        explanation:
            "When the form is submitted, a Screen Action runs and the form data is available via the implicit Form.Record variable.",
    },
    {
        question:
            "Considering the following Aggregate, what will be the attributes of the GetOrdersShippingState.List.Current record?",
        type: "single",
        options: [
            "The two aggregation attributes: ShippingState and Count.",
            "The two aggregation attributes (ShippingState and Count) plus the columns used to calculate these aggregations.",
            "The two aggregation attributes (ShippingState and Count) plus all the attributes of the Source Entity.",
            "Six attributes corresponding to the six visible columns in the Aggregate: ShippingState, Count, Description, DueDate, CreatedOn and Priority.",
        ],
        correct: [0],
        explanation:
            "When grouping with aggregate functions, only the selected group attributes (e.g. ShippingState, Count) are included in the output.",
    },
    {
        question:
            "The scope of Input Parameters and Local Variables is limited to the Screen where they are defined.",
        type: "single",
        options: [
            "True",
            "Varies when using function.",
            "Varies depending on the module setup",
            "False",
        ],
        correct: [0],
        explanation:
            "Input Parameters and Local Variables are scoped to the screen or action where they are defined.",
    },
    {
        question: "The content inside the Placeholder may be different for each instance.",
        type: "single",
        options: ["True", "False"],
        correct: [0],
        explanation:
            "Placeholders can be dynamically filled with different content depending on the screen or block instance.",
    },
    {
        question: "How can we limit the number of records returned by an Aggregate?",
        type: "single",
        options: [
            "Use Sorting.",
            "Use the Max. Records property.",
            "Use the Count value.",
            "Use the Length value.",
        ],
        correct: [1],
        explanation:
            "The 'Max. Records' property limits the number of records returned by the Aggregate.",
    },
    {
        question: "Screen Actions can also call Server Actions.",
        type: "single",
        options: ["Either", "True", "Neither", "False"],
        correct: [1],
        explanation:
            "Screen Actions can invoke Server Actions to perform logic or database operations on the server side.",
    },
    {
        question: "It is possible to translate all Server Actions into SQL.",
        type: "single",
        options: ["True", "False"],
        correct: [1],
        explanation:
            "Not all Server Actions translate directly into SQL; some contain logic that executes in the application server.",
    },
    {
        question:
            "Which of the following options is not a valid step if we want to just fetch the cities for the country selected in the respective dropdown?",
        type: "single",
        options: [
            "Filter the GetCities Aggregate by the selected country.",
            "Refresh the GetCities Aggregate in the OnChange Action of the Country Dropdown.",
            "Set the Fetch property of the GetCities Aggregate to Only On Demand.",
            "Call the GetCities Aggregate in the GetCountries' On After Fetch Event handler.",
        ],
        correct: [3],
        explanation:
            "Calling GetCities in GetCountries' OnAfterFetch isn't valid because OnAfterFetch is not used in this context.",
    },
    {
        question:
            "Entities are created with a set of Entity Actions for CRUD operations, which ones?",
        type: "single",
        options: [
            "Add, Change, Remove",
            "Create, CreateOrUpdate, Update, Get, GetForUpdate, Delete",
            "GET, POST, DELETE",
            "Insert, Update, Delete",
        ],
        correct: [1],
        explanation:
            "OutSystems provides a full set of entity actions for data manipulation: Create, CreateOrUpdate, Update, Get, GetForUpdate, Delete.",
    },
    {
        question: "The order of the Entities in the join does not matter.",
        type: "single",
        options: ["True", "False"],
        correct: [0],
        explanation:
            "In most cases in OutSystems, the order of joins does not impact the logic or output of the Aggregate.",
    },

    {
        question:
            "Consider the following Server Action. What happens if the GetEmployeeById Aggregate does not return any record?",
        type: "single",
        options: [
            "The module's global exception handler is executed.",
            "The DatabaseException flow is executed.",
            "The RecordNotFound flow is executed.",
            "No exception flow is executed.",
        ],
        correct: [2],
        explanation:
            "If no record is returned by the aggregate, the RecordNotFound flow is executed to handle the missing data.",
    },
    {
        question:
            "Consider an Aggregate with the Fetch property set to Only On Demand. When does that Aggregate run?",
        type: "single",
        options: [
            "Programmatically, using a Refresh Data node in a Screen Action.",
            "Automatically, when the Aggregates set to run 'At Start' finish.",
            "Automatically, when the Screen is initializing.",
            "Programmatically, using a Server Action.",
        ],
        correct: [0],
        explanation:
            "An aggregate with 'Only On Demand' will run programmatically when you use a Refresh Data node in a Screen Action.",
    },
    {
        question: "In Rich Widgets, the List_Navigation widget ...",
        type: "single",
        options: [
            "Is a navigator for a Form with multiple pages, showing a defined number of elements per page.",
            "Is a navigator for a Table Records with multiple pages, showing a defined number of elements per page.",
        ],
        correct: [1],
        explanation:
            "The List_Navigation widget is used to navigate through multiple pages of Table Records, displaying a specified number of items per page.",
    },
    {
        question: "A Block can be used...",
        type: "single",
        options: [
            "Inside Screens and Blocks, except on itself.",
            "Only inside other Blocks.",
            "Inside Screens and Blocks, including itself.",
            "Only inside other Screens.",
        ],
        correct: [0],
        explanation:
            "Blocks can be used inside other Screens or Blocks, but not inside themselves.",
    },
    {
        question:
            "Style classes can be overridden, so if you have the same style class defined in a Web Block, a Screen, and the Theme, which definition is applied?",
        type: "single",
        options: [
            "The one in the UI Flow.",
            "The one in the Theme.",
            "The one in the Web Block.",
            "The one in the Screen.",
        ],
        correct: [3],
        explanation:
            "If a style class is defined in multiple places, the one in the Screen has the highest priority and will be applied.",
    },
    {
        question:
            "When deleting a record from an Entity, it deletes all records of an Entity with foreign key references. In this case, what is the Delete Rule in use?",
        type: "single",
        options: ["Delete", "Protect", "Ignore"],
        correct: [0],
        explanation:
            "The Delete rule is used when deleting records that are referenced by foreign keys, ensuring that related records are also deleted.",
    },
    {
        question: "Which of the following is not an Entity Action of the Customer Entity?",
        type: "single",
        options: ["UpdateCustomer.", "RetrieveCustomer.", "CreateCustomer.", "DeleteCustomer."],
        correct: [1],
        explanation:
            "RetrieveCustomer is not an Entity Action by default. It might be part of custom logic but is not automatically provided.",
    },
    {
        question: "Which HTTP request method does the Submit method use?",
        type: "single",
        options: ["GET", "POST", "PATCH", "PUT"],
        correct: [1],
        explanation:
            "The Submit method typically uses the POST HTTP method to send data to the server.",
    },
    {
        question: "Regarding Screen lifecycle, which of the following options is true?",
        type: "single",
        options: [
            "Ajax submit, the preparation action will be reloaded",
            "Ajax submit, the preparation action will not be reloaded",
            "IsLoadingScreen() will return true when using ajax reload to reload a portion of the screen's html",
            "IsLoadingScreen() will return false during the preparation step without starting to build screen html",
        ],
        correct: [1],
        explanation:
            "When using Ajax submit, the preparation action is not reloaded unless explicitly triggered.",
    },
    {
        question: "A Structure can have attributes of the following data types:",
        type: "single",
        options: [
            "Basic, Structure, Entity, and List",
            "Basic and List only",
            "Basic, Complex, and Record",
            "Basic, String, and Object",
        ],
        correct: [0],
        explanation:
            "Structures can have attributes of basic types, other structures, entities, and lists.",
    },

    {
        question:
            "Consider a Screen that contains a Form to collect Customer data. The Form has a Save Button with the On Click Destination set to a SaveOnClick Action, which sends the data to the server to store it in the database. What is the best way to make sure that we do not send the data to the server when the mandatory Customer data fields have not been filled in?",
        type: "single",
        options: [
            "Just set the Built-in validations of the Save button to Yes.",
            "Set the Built-in validations of the Save button to Yes and add an Exception Handler flow to handle invalid inputs.",
            "Set the Built-in validations of the Save button to Yes and check if the Form's Valid property is True.",
            "Perform custom validations for all inputs. If one fails, set the Valid property of the Form to False.",
        ],
        correct: [2],
        explanation:
            "To prevent sending data to the server when mandatory fields are not filled, use the 'Valid' property of the Form and check if it's True.",
    },
    {
        question: "Which of the following options is correct regarding Client Variables?",
        type: "single",
        options: [
            "Lists or Binary Data can also be stored on Client Variables.",
            "The value of a Client Variable is shared among all logged-in users.",
            "Client Variables are useful to cache frequently accessed information.",
            "Client Variables should be used to store confidential information.",
        ],
        correct: [2],
        explanation:
            "Client Variables are designed to cache frequently accessed information on the client side, improving performance.",
    },
    {
        question: "Regarding Web Blocks in Outsystems, select the statement that is true.",
        type: "single",
        options: [
            "You can instantiate Web Blocks on Web Screens and external HTML pages, by adding a special html tag.",
            "You can instantiate Web Blocks only on Web Screens.",
            "You can instantiate Web Blocks on Screen Actions.",
            "You can instantiate Web Blocks on Web Screens and other Web Blocks.",
        ],
        correct: [3],
        explanation:
            "Web Blocks can be instantiated in Web Screens and also inside other Web Blocks for modular UI design.",
    },
    {
        question: "A Web Block can be used",
        type: "single",
        options: [
            "Inside Web Screens and Web Blocks, even on itself.",
            "Inside Web Screens and Web Blocks, except on itself.",
        ],
        correct: [1],
        explanation:
            "Web Blocks can be used inside other Web Screens and Web Blocks, but not inside themselves to avoid infinite recursion.",
    },
    {
        question: "The recommended data types for Session Variables are...",
        type: "single",
        options: [
            "Basic and Entity Types.",
            "Basic and Structures Types.",
            "Any data type can be used.",
            "Basic and Entity Identifier Types.",
        ],
        correct: [0],
        explanation:
            "Session Variables are best suited for basic types and entity types, as they need to be easily serialized.",
    },
    {
        question: "Client Actions and Server Actions can have the following variables:",
        type: "single",
        options: [
            "Output Parameters and Local Variables, but no Input Parameters.",
            "Input Parameters and Local Variables, but no Output Parameters.",
            "Input and Output Parameters, but no Local variables.",
            "Input and Output Parameters, as well as Local Variables.",
        ],
        correct: [3],
        explanation:
            "Client and Server Actions can have input and output parameters along with local variables for handling logic within the action.",
    },
    {
        question: "It is possible to see the SQL generated by an Aggregate?",
        type: "single",
        options: ["FALSE", "TRUE"],
        correct: [1],
        explanation:
            "Yes, in OutSystems, you can see the SQL generated by an Aggregate using the 'Show SQL' option in the Aggregate editor.",
    },
    {
        question:
            "When a Form is submitted, what are the built-in validations that Outsystems performs?",
        type: "single",
        options: [
            "If the data submitted by the user matches the data type of the Source Record of the Form.",
            "If the data submitted by the user matches the data type of the variables associated with the respective Inputs.",
            "If the Mandatory fields are filled in.",
            "If the Mandatory fields are filled in and if the data submitted by the user matches the data type of the variables associated Inputs.",
        ],
        correct: [3],
        explanation:
            "OutSystems performs built-in validations for mandatory fields and correct data types when the form is submitted.",
    },
    {
        question: "In OutSystems, how do we restrict access to a Screen?",
        type: "single",
        options: [
            "In the Screen Properties, untick roles to restrict their access.",
            "Use the CheckRole Action.",
            "Go to the Users application and associate the Screen to a specific role.",
            "We don't. Only users with a username and password can access.",
        ],
        correct: [2],
        explanation:
            "In OutSystems, access to Screens is controlled by roles, which can be assigned through the Users application.",
    },
    {
        question:
            "A Theme defines the look and feel of application Screens and you can directly apply it to ...",
        type: "single",
        options: [
            "Only the Module.",
            "A Module, a UI Flow, or an individual Screen.",
            "A Module, a UI Flow, or an individual Screen or Web Block.",
            "A Module or a UI Flow.",
        ],
        correct: [2],
        explanation:
            "A Theme can be applied to a Module, UI Flow, individual Screen, or Web Block in OutSystems to maintain consistent styling across the application.",
    },
];

const QUESTIONS_PER_PAGE = 50;
let currentPage = 1;
let selectedAnswers = {}; // Lưu trữ trạng thái đã chọn
let submittedResults = {}; // Lưu trữ kết quả sau khi submit

// Tạo giao diện câu hỏi
function loadQuiz(page = 1) {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
    const start = (page - 1) * QUESTIONS_PER_PAGE;
    const end = Math.min(start + QUESTIONS_PER_PAGE, quizData.length);
    const currentQuestions = quizData.slice(start, end);

    currentQuestions.forEach((item, index) => {
        const globalIndex = start + index;
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `<h3><span style="font-weight: bold;">Question ${
            globalIndex + 1
        }.</span> ${item.question}</h3>`;

        item.options.forEach((option, optIndex) => {
            const optionDiv = document.createElement("div");
            optionDiv.classList.add("option");
            const inputType = item.type === "multiple" ? "checkbox" : "radio";
            const isChecked = selectedAnswers[globalIndex]?.includes(optIndex) ? "checked" : "";
            optionDiv.innerHTML = `
                <input type="${inputType}" name="q${globalIndex}" value="${optIndex}" id="q${globalIndex}o${optIndex}" ${isChecked}>
                <label for="q${globalIndex}o${optIndex}">${String.fromCharCode(
                65 + optIndex
            )}. ${option}</label>
            `;
            questionDiv.appendChild(optionDiv);
        });

        const resultText = document.createElement("div");
        resultText.classList.add("result-text");
        resultText.id = `result-q${globalIndex}`;
        if (submittedResults[globalIndex]) {
            resultText.style.display = "block";
            resultText.innerHTML = submittedResults[globalIndex];
        }
        questionDiv.appendChild(resultText);

        quizContainer.appendChild(questionDiv);
    });

    loadPagination();
}

// Tạo phân trang
function loadPagination() {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";
    const totalPages = Math.ceil(quizData.length / QUESTIONS_PER_PAGE);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.textContent = i;
        pageBtn.classList.toggle("active", i === currentPage);
        pageBtn.addEventListener("click", () => {
            currentPage = i;
            loadQuiz(currentPage);
            // checkAllAnswered();
        });
        paginationContainer.appendChild(pageBtn);
    }
}

// Cập nhật trạng thái đã chọn
function updateSelectedAnswers() {
    const allInputs = document.querySelectorAll("#quiz input");
    allInputs.forEach((input) => {
        const questionIndex = parseInt(input.name.replace("q", ""));
        if (!selectedAnswers[questionIndex]) selectedAnswers[questionIndex] = [];

        if (input.checked) {
            const value = parseInt(input.value);
            if (!selectedAnswers[questionIndex].includes(value)) {
                if (quizData[questionIndex].type === "single") {
                    selectedAnswers[questionIndex] = [value];
                } else {
                    selectedAnswers[questionIndex].push(value);
                }
            }
        } else {
            const value = parseInt(input.value);
            selectedAnswers[questionIndex] = selectedAnswers[questionIndex].filter(
                (v) => v !== value
            );
        }
    });
}

// Kiểm tra xem tất cả câu hỏi đã được trả lời chưa
// function checkAllAnswered() {
//     let allAnswered = true;

//     quizData.forEach((_, index) => {
//         const isAnswered = selectedAnswers[index] && selectedAnswers[index].length > 0;
//         if (!isAnswered) allAnswered = false;
//     });

//     document.getElementById('submit-btn').disabled = !allAnswered;
// }

// Xử lý submit và hiển thị kết quả
function submitQuiz() {
    let score = 0;
    const totalQuestions = quizData.length;

    quizData.forEach((item, index) => {
        const selectedValues = selectedAnswers[index] || [];
        const isCorrect =
            item.type === "multiple"
                ? arraysEqual(selectedValues.sort(), item.correct.sort())
                : selectedValues.length === 1 && selectedValues[0] === item.correct[0];

        submittedResults[index] = isCorrect
            ? `<span class="correct">Correct: ${item.correct
                  .map((i) => String.fromCharCode(65 + i))
                  .join(", ")}</span><br><div class="explanation">${item.explanation}</div>`
            : `<span class="incorrect">Incorrect</span> - Correct Answer: ${item.correct
                  .map((i) => String.fromCharCode(65 + i))
                  .join(", ")}<br><div class="explanation">${item.explanation}</div>`;

        const resultText = document.getElementById(`result-q${index}`);
        if (resultText) {
            resultText.style.display = "block";
            resultText.innerHTML = submittedResults[index];
        }

        if (isCorrect) score++;
    });

    const scoreDisplay = document.getElementById("score-display");
    scoreDisplay.innerHTML = `Your Score: ${score}/${totalQuestions} (${(
        (score / totalQuestions) *
        100
    ).toFixed(2)}%)`;
}

// So sánh hai mảng
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, idx) => val === arr2[idx]);
}

// Khởi chạy
document.addEventListener("DOMContentLoaded", () => {
    loadQuiz(currentPage);
    document.getElementById("submit-btn").addEventListener("click", submitQuiz);
    document.getElementById("quiz").addEventListener("change", () => {
        updateSelectedAnswers();
        // checkAllAnswered();
    });
});
