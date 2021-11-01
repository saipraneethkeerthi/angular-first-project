import { RouterModule,Routes} from "@angular/router"


const router: Routes=[
   
    {path:'**',redirectTo:''}
]

export const appRoutingModule=RouterModule.forRoot(router)