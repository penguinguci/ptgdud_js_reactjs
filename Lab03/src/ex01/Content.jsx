import content from '../assets/content.png';
import session from '../assets/session.png';

const Content = () => {
    return (
        <div className='content'>
            <img src={session} alt="" />
            <img className='img_content' src={content} alt="" />
        </div>
    );
}

export default Content;