import LayoutLoader from '../../assets/images/PleaseWaitForAMoment.mp4'
import './Loader.scss';

function Loader() {
  return (
    <>
      <div className='Loader'>
        <video width="25%" height="25%" autoPlay muted loop>
          <source
            src={LayoutLoader}
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}

export default Loader;
