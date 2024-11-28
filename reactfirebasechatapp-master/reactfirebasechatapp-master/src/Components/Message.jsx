// import React from 'react'
// import { HStack, Avatar, Text } from "@chakra-ui/react"

// const Message = ({ text, uri, user = "other" }) => {
//     return (
//         <HStack alignSelf={user === "me" ? "flex-end" : "flex-start"} borderRadius={"base"} bg="gray.100" paddingY={"2"} paddingX={user === "me" ? "4" : "2"}>
//             {
//                 user === "other" && <Avatar src={uri} />
//             }
//             <Text>{text}</Text>
//             {
//                 user === "me" && <Avatar src={uri} />
//             }
//         </HStack>
//     )
// }

// export default Message
import {HStack,Avatar,Text ,} from "@chakra-ui/react"
export default function Message({text,uri,user="other"}){
    return (
    <HStack alignSelf={user==="me"?"flex-end" :"flex-start"} borderRadius={"base"} bg={"gray.100"} paddingy={"2"} paddingX={user==="me"? "4":"2"} >
<Text>{text}</Text>
{
    user ==="other"&&<Avatar src={uri}>

    </Avatar>
}
{
    user ==="me"&&<Avatar src={uri}>

    </Avatar>
}
    </HStack>
    );
}