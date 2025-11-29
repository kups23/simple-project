
import { Breadcrumbs, Typography, Stack, Avatar } from '@mui/material';
import userImg from '../../../../public/images/profile/avarter.jpg';
import Link from "next/link";
import MatchButton from '../../reusableComponent/MatchedButton';
import { applicants, Applicant } from '../../datas/applicant.tsx';
import Chip from '@mui/material/Chip';
import QuickActionButtons from '../../reusableComponent/QuickActionButtons';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ClearIcon from '@mui/icons-material/Clear';




async function JobManagement({params}:{params:Promise<{jobsId:string}>}) {
  //Breadcum settings
  const breadcrumbs = [
    <Link underline="hover" href="/jobs" key="1" color="inherit">
      Jobs
    </Link>,
        <Link underline="hover" href="/jobs" key="2" color="inherit">
        Senior Frontend Developer
      </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }}>
      Job Management
    </Typography>,
  ];

  //-----We getting details of a particular user----
  //get the id passed in url
  const jobUserId = (await params).jobsId

  //find the user in stored data
  const userDetails = applicants.find((user: Applicant) => user.id === parseInt(jobUserId));
  

  return (
    <main className="p-4 flex flex-col ">

      {/* Breadcrumbs */}
      <div className="text-gray-400 mb-3">
        <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
        </Stack>
      </div>

      {/* profile and expereince section */}
      <div className='bg-[#f9f9f9] gap-10 px-4 py-7 flex flex-col'>

        {/* Profile and Quick Action Section */}
        <div className='flex mb-4 justify-start gap-10'>

           {/* Profile Information */}
          <div className='flex flex-col'>
            <div className='flex mb-6  gap-4 items-center '>
              
              {/* Profile photo section */}
              <div className='flex gap-2'>
                <Avatar src={userDetails.userImg} alt="Profile Image" sx={{ width: 40, height: 40 }} />
                <div className='flex flex-col '>
                  <span className='text-lg font-bold text-black'>{ userDetails.userName}</span>
                  <span className='-mt-1 text-sm text-gray-400'>{userDetails.field }</span>
                </div>
              </div>

              {/* Matched button section
                * It displays different for different %
                * 0 to 49 is low
                * 50 to 79 is average
                * 80 to 100 is good
              */}
              <MatchButton value={userDetails.matched}/>   
            </div>

            {/* Personal Information */}
            <div className='flex flex-col gap-4'>
              <span className='text-black font-bold'>Personal Informationn</span>
              <Stack direction="row" spacing={1}>
                {userDetails.stacks.map((stack:any)=> <Chip label={stack} />)}
              </Stack>

            </div>
          </div>

          {/* Quick Action Section */}
          <div className='flex flex-col gap-3 w-full'>
            <span className='text-black font-bold '>Quick Actions</span>
            <QuickActionButtons text='Shortlist Candidate' icon={<PeopleAltIcon />} href='#' variant='contained' color='primary' />
            
            <QuickActionButtons text='Schedule Interviews' icon={<CalendarTodayIcon />} href='#' variant='outlined' color='text' />
            
            <QuickActionButtons text='Decline Application' icon={<ClearIcon/>} href='#' variant='outlined' color='red' />
          </div>
        </div>
        <hr />

        {/* Experience */}
        <div className='flex flex-col'>
          <span className='text-black font-bold mb-4'>Experience</span>
            
          {/*Resume of previous work  */}
          {userDetails.experience.map((exp: any) => 
            <div className='border-l  border-gray-300 mb-4 px-2 flex flex-col'>

                  {/* title */}
              <span className='font-bold text-xs text-black'>{exp.title }</span>

                  {/*company and time worked  */}
                  <div className='flex gap-2 items-center'>
                <span className='text-xs text-gray-400'>{ exp.company}</span>
                    <div className='w-[5px] h-[5px] rounded-full bg-black'></div>
                <span className='text-xs text-gray-400'>{exp.time }</span>
                  </div>

                  {/* what you did */}
              <span className='text-xs text-gray-400'>{ exp.about}</span>
            </div>         
          
          )}

        </div>

      </div>

    </main>
  )
}

export default JobManagement