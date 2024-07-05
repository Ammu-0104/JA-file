import "./App.css";
import Main from "./Component/Main";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobListing from "./Component/Profile/JobListing/JobListing";
import JobViewing from "./Component/Profile/JobViewing/JobViewing";
import JobPosting from "./Component/Profile/JobPosting/JobPosting";
import MyActivity from "./Component/Profile/MyActivity/MyActivity";
import MyActivitePosting from "./Component/Profile/MyActivityPosting/MyActivePosting";
import MyViewedActivity from "./Component/Profile/MyActivityViewed/MyViewedActivity";
import MyPostViewMain from "./Component/Profile/MyViewedPosting/MyPostViewMain";
// import PostViewTab2 from "./Component/Profile/MyViewedPosting/PostViewTab2";
import CategoryList from "./Component/Profile/JobListing/Job List/CategoryList";
import SimilarJobs from "./Component/Profile/JobViewing/SimilartJob";
import MyViewingActivity from "./Component/Profile/JobSaving/MyViewingSaved";
import JobPosted from "./Component/Profile/JobPosting/JobPosted";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/login" element={<Login />}/> */}
          <Route path="/" element={<Main />}>
            <Route path="/main/joblisting" element={<JobListing />} />
            <Route path="/main/jobViewing" element={<JobViewing />} />
            <Route path="/main/jobPosting" element={<JobPosting />} />      
            <Route path="/main/MyActivity" element={<MyActivity />} />
            <Route path="/main/MyActivitePosting" element={<MyActivitePosting />} />
            <Route path="/main/MyViewedActivity" element={<MyViewedActivity />} />
            <Route path="/main/MyPostViewMain" element={<MyPostViewMain />} />
            {/* <Route path="/main/PostViewTab2" element={<PostViewTab2 />} /> */}
            <Route path="/main/CategoryList" element={<CategoryList />} />
            <Route path="/main/SimilarJobs" element={<SimilarJobs />} />
            <Route path="/main/MyViewingActivity" element={<MyViewingActivity/>} />
            <Route path="/main/JobPosted" element={<JobPosted/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

