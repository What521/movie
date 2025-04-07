import './css/FAQ.css';
import QA from '../components/Q&A';
import LOI from '../components/ListOfImages';

function FAQ() {
    return (
        <>
               <h2>FAQ</h2>
                <br/>
                <QA
                q="How do I sign up and purchase subscription for mayback movies?" 
                a="To sign up for mayback movies streaming service, click 
                    “Sign Up” or “Subscribe.” Create an account with your email, password, and any required info,
                     then choose a subscription plan (monthly, annual, or features like HD). Enter payment 
                     details (credit card, PayPal, or other options), and once processed, you’ll receive a confirmation. 
                     Once done, log in and start streaming your favorite movies!" />

<br/>

<QA
q="How do I cancel a subscription?"
a="To cancel the movie streaming subscription, log in and navigate 
                    to your account or subscription settings. Look for the option labeled “Manage Subscription” or 
                    “Cancel Subscription.” Follow the prompts to confirm the cancellation. You’ll receive 
                    a confirmation email and allow you to continue using your subscription until the 
                    end of the current billing period. Ensure you cancel before the next billing date to avoid being charged."/>

                <br/>
                <QA
                q="Is streaming movies with different audio languages and captions possible?"
                  a="Yes! Our platform supports multiple audio languages and captions to enhance your viewing experience. 
                    You can easily switch between available languages or turn on subtitles and captions during playback. 
                    Whether you prefer watching in the original language or need subtitles for better accessibility, 
                    we’ve got you covered. Just click the audio or subtitle menu during streaming to choose your preferred 
                    settings" />
              
<br/>
                <QA
                q="Do I need to download anything to watch on Mayback Movies?"
                a="No downloads are necessary! Mayback Movies is available through your web browser or via our mobile app (available for iOS and Android). Just log in and stream instantly."/>
                

                <br/>
                
                <QA
                 q="Can I try Mayback Movies for free?" 
                a="Yes! We offer a 7-day free trial for all new users, so you can explore our library and experience all the features of Mayback Movies before deciding to subscribe."
                />


                <LOI
                image1="images/movieP2.jfif"
                image2="images/moviePoster.jpg"
                image3="images/moviePoster.jfif"
                />
        </>
    );
};

export default FAQ;