import { Box } from "@mui/material"
import landingPageStyles from "./LandingPage.Styles"
import { JitsiMeeting } from "@jitsi/react-sdk";


const LandingPage = () => {


    return (
        <Box sx={landingPageStyles.mainContainer}>
            <JitsiMeeting
                roomName="PleaseUseAGoodRoomName"
                configOverwrite={{
                    startWithAudioMuted: true,
                    disableModeratorIndicator: true,
                    startScreenSharing: true,
                    enableEmailInStats: false
                }}
                interfaceConfigOverwrite={{
                    DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
                }}
                userInfo={{
                    displayName: 'YOUR_USERNAME',
                    email : "kantamanenibharath21@gmail.com"
                }}
                onApiReady={(externalApi) => {
                }}
                getIFrameRef={(iframeRef) => { iframeRef.style.height = '100%'; }}
            />
        </Box>
    )
}


export default LandingPage