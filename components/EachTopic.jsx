
import PropTypes from 'prop-types';


export default function EachTopic (props) {
    const {topic} = props


   
    return (
        
    <option value={topic.slug} >{topic.slug}</option>

    
  
    )
}

EachTopic.propTypes = { 
    topic: PropTypes.array
  }