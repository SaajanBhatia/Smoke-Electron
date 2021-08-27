import modules from "../api/modules";

const initState = {
    tasks : [],
    profiles : [],
    proxies : [],
    monitored: [],
    user:{
        name:"user#0001"
    },
    modules:[],
    websocket:"DISCONNECTED"
}

//             const _ = require('lodash/lang');
//             let task = _.cloneDeep(action.task)
//             action.task.id = Math.random()
//             console.log("Adding Task", task)
//             console.log("Current Tasks:", state.tasks)


const rootReducer = (state = initState, action) => {
    let tasks;
    let profiles;
    let proxies;
    switch (action.type){
        case "tasks/fetch":
            tasks = Array.isArray(action.tasks) ? action.tasks : [];
            return ({
                ...state,
                tasks: tasks
            });
        case "tasks/create":
            tasks = Array.isArray( state.tasks ) ? state.tasks : [];
            return({
                ...state,
                tasks: [...tasks, action.task]
            });
        case "tasks/delete":
            return ({
                ...state,
                tasks: state.tasks.filter((task) => {return action.task.id !== task.id})
            });

        case "tasks/start":
            let tasksStarted = state.tasks.map((task) => {
                if (task.id === action.task.id){
                    task.active = true
                }
                return task
            })
            return ({
                ...state,
                tasks: tasksStarted
            });

        case "tasks/stop":
            let tasksStopped = state.tasks.map((task) => {
                if (task.id === action.task.id){
                    task.active = false
                }
                return task
            })
            return ({
                ...state,
                tasks: tasksStopped
            });


        case "profiles/fetch":
            profiles = Array.isArray( action.profiles ) ? action.profiles : [];
            return ({
                ...state,
                profiles: profiles
            });

        case "profiles/create":
            profiles = Array.isArray( state.profiles ) ? state.profiles : [];
            return ({
                ...state,
                profiles: [...profiles, action.profile]
            });
        case "profiles/delete":
            return ({
                ...state,
                profiles: state.profiles.filter((profile)=> {return action.profile.id !== profile.id})
            });


        case "proxies/fetch":
            proxies = Array.isArray( action.proxies ) ? action.proxies : [];
            return ({
                ...state,
                proxies: proxies
            });
        case "proxies/create":
            proxies = Array.isArray( state.proxies ) ? state.proxies : [];
            return ({
                ...state,
                proxies: [...proxies, action.proxy]
            });
        case "proxies/delete":
            return ({
                ...state,
                proxies: state.proxies.filter((proxy)=> {return action.proxy.name !== proxy.name})
            });


        case "modules/fetch":
            return ({
                ...state,
                modules : action.modules
            });

        case "websocket/connected":
            return ({
                ...state,
                websocket: "CONNECTED"
            })

        case "websocket/disconnected":
            return ({
                ...state,
                websocket: "DISCONNECTED"
            })

        default:
            return ({
                ...state
            })


    }


}

export default rootReducer;


//     tasks : [
//         {
//             id:1,
//             name:"RTX 3090",
//             threads:5,
//             store:"scan",
//             product:"132213123",
//             delay:2000,
//             mode:"Restock",
//             proxy:"rainbow",
//             profile:"main",
//         },
//         {
//             id:2,
//             threads:5,
//             store:"scan",
//             product:"https://www.scan.co.uk/products/18tb-seagate-st18000nm000j-exos-x18-hard-drive-35-hdd-sata-iii-6gb-s-7200rpm-256mb-cache-416ms-ncq-o",
//             delay:3000,
//             mode:"Restock",
//             proxy:"ignify",
//             profile:"main2",
//         },
//     ],
//     profiles : [
//         {
//             name:"Tufayl 1",
//             id:1,
//             email:"text@example.com",
//             delivery_address:{
//                 first_name:"tufayl",
//                 last_name:"rahman",
//                 line_1:"10 downing street",
//                 line_2:"",
//                 postcode:"SW1A 2AA",
//                 city:"London",
//                 county:"London",
//                 country:"United Kingdom"
//             },
//             billing_address:{
//                 first_name:"tufayl",
//                 last_name:"rahman",
//                 line_1:"10 downing street",
//                 line_2:"",
//                 postcode:"SW1A 2AA",
//                 city:"London",
//                 county:"London",
//                 country:"United Kingdom"
//             }
//         }
//     ],
//     proxies : [
//         {
//             name:"ignify",
//             id:1,
//             proxies_list:[
//                 "1313:1231",
//                 "1313:1231",
//                 "1313:1231"
//             ]
//         }
//     ],
//     monitored: [],
//     user:{
//         name:"tfyl#0001"
//     },
//     modules:[
//         {
//             store:"Game",
//             modes:["normal","drop"],
//         },{
//             store:"Lidl",
//             modes:["normal","preload"],
//         }
//     ]
// }