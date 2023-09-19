



export default function EachTopic (props) {
    const {topic} = props


   
    return (
        
    <option value={topic.slug} >{topic.slug}</option>

    
  
    )
}