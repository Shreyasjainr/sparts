import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarChart from './components/BarChart';
import SummaryCard from './components/SummaryCard';
import Navbar from './components/NavBar';
import Sidebar from './components/SideBar';

function App() {
  const [students, setStudents] = useState([]);
  const [enquiries, setEnquiries] = useState(0);
  const [fees, setFees] = useState(0);
  const [enrollments, setEnrollments] = useState(0);
  const [assignments, setAssignments] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsRes = await axios.get('https://strapiqa.sparts.app/api/students?filters[users][id]=3');
        setStudents(studentsRes.data.data);

        const enquiriesRes = await axios.get('https://strapiqa.sparts.app/api/enquiries?filters[users][id]=3');
        setEnquiries(enquiriesRes.data.data.length);

        const feesRes = await axios.get('https://strapiqa.sparts.app/api/fees-collection?filters[users][id]=3');
        setFees(feesRes.data.data.length);

        const enrollmentsRes = await axios.get('https://strapiqa.sparts.app/api/students-enrolement-data?filters[users][id]=3');
        setEnrollments(enrollmentsRes.data.data.length);

        const assignmentsRes = await axios.get('https://strapiqa.sparts.app/api/assignment-submissions?filters[users][id]=3');
        setAssignments(assignmentsRes.data.data.length);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="flex">
            <Sidebar /> 
            <div className="flex-1">
              <Navbar/>
              <div className='border-zinc-900 border-2 w-max'>
                  Quick Actions
                <div className="flex space-x-60 p-3 ">
                    <button className="bg-orange-500 text-white p-2 rounded">Send Enrollment Form</button>
                    <button className="bg-orange-500 text-white p-2 rounded">Add Student</button>
                    <button className="bg-orange-500 text-white p-2 rounded">Collect Fees</button>
                </div>
              </div>

                <div className="mt-6">
                    <BarChart data={students} />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                    <SummaryCard title="Enquiries" count={enquiries} />
                    <SummaryCard title="Fees Collection" count={fees} />
                    <SummaryCard title="Enrollments" count={enrollments} />
                    <SummaryCard title="Assignments Submitted" count={assignments} />
                </div>
            </div>
        </div>
  );
}

export default App;
