import Head3 from '../../../components/Head3'
import PText from '../../../components/PText'

const SecLanguage = () => {

    return (
        <div className="col-lg-6" data-aos="fade-up-right">
            <Head3 title='Language' />
            <div>
            	<PText text="Arabic" />
            </div>

            <div>
              <PText text="English" />
            </div>
        </div>
    )
}

export default SecLanguage;