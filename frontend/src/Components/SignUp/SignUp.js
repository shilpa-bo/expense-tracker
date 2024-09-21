
//need to differentiate home page from signup page
//app automatically routes to signup, and once you are signed in, you can see everything else and route everything else
import{ React , useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
export default function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState(false);

    const handleSubmit = (e) => {
        e.prevent.default();
        //need to connect this to database
        axios.post((''), {email, password}) 
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
                <input 
                type="email" 
                class="form-control" 
                id="email" 
                aria-describedby="emailHelp" 
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input 
            type="password" 
            class="form-control" 
            id="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div class="form-group form-check">
            <input 
            type="checkbox" 
            class="form-check-input" 
            id="exampleCheck1"
            value={checked}
            onChange={(e) => setChecked(e.target.checked)}
            />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    
    </>
  )
}
