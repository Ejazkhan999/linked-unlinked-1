import React from 'react';
import reactDom from 'react-dom';

class App extends React.Component{
    render(){
        const allUsers = [
            {
                id: 100,
                name: "Qasim Salam"
            },
                {
                id: 101,
                name: "Neelam Anwar"
            },
                {
                id: 102,
                name: "Saad Javaid"
            },
                {
                id: 103,
                name: "Talha Masood"
            },
                {
                id: 104,
                name: "Ali Bilal"
            },
                {
                id: 105,
                name: "Zain"
            },
         
                {
                id: 107,
                name: "Bilal Zain"
            },
            
        ];
        
        const linked = [
            {
                id: 106,
                name: "Talal Ali"
            },
            {
                id: 108,
                name: "Mueez Ali"
            },
        ]
        
        
        const Unlinked_data = allUsers.map(userdata=><Unlinked_data key = {userdata.id} 
        name = {userdata.name} />
        )
        return(
    <div>

        {Unlinked_data}
    </div>
            )
    }


}

export default App;
