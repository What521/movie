import './css/About.css';
import Reviews from '../components/Reviews';
import LOI from '../components/ListOfImages';

function About() {
    return (
        <>
                <h5>About Us</h5>
                <p>
                    At Mayback Movies, we believe movies should be accessible anytime, anywhere. Our platform offers a vast library of blockbuster hits, indie favorites, and binge-worthy series for every type of viewer. Founded with the mission of bringing cinematic experiences to your fingertips, Mayback Movies provides high-quality streaming with personalized recommendations tailored just for you. Whether you’re into action-packed thrillers, heartwarming rom-coms, or sci-fi thrillers, we’ve got it all.

                    With a seamless user experience and flexible streaming options, Mayback Movies is here to transform how you watch and discover entertainment. Start streaming today and experience the future of entertainment at your convenience! With new content added regularly, you’ll always have something fresh to watch.
                    
                    Our expertly curated collections help you discover hidden gems, cult classics, and the latest releases all in one place. Plus, our interactive features, such as watch parties and community ratings, make streaming more engaging than ever. With multi-profile support, every member of your household can have a personalized experience with their own watchlist and recommendations.
                    
                    Whether you're watching on your smart TV, tablet, or phone, Mayback Movies delivers a seamless viewing experience across all your devices. Sign up now and unlock unlimited entertainment with just a click!
                </p>

                <div className="images">
                <LOI
                image1="images/IM.jfif"
                image2="images/TT.jfif"
                image3="images/Js.jfif"/>
                </div> 
            
                <h1>Some of our popular reviews: </h1>
                <Reviews
                person="Ariana Gregory, 23, Graduate Student at UCLA:"
review="As a film studies grad student, I’m always on the hunt for platforms that go beyond the usual mainstream picks. Mayback Movies delivers exactly that. Their catalog is a film lover’s dream—from indie darlings and foreign masterpieces to deep-cut classics that are impossible to find elsewhere.
What really sets Mayback apart is their curation. You can tell it’s put together by people who genuinely love cinema, not just an algorithm pushing the latest trends."
                />
<br/>

              <Reviews 
                person="Tom Mckenzie, 27, Investment banker at JP morgan:"
                review="Between long hours and back-to-back meetings, I don’t have time to waste on mediocre movies. That’s why Mayback Movies is my go-to. It’s not just another streaming platform—it’s a carefully curated space where every recommendation feels intentional. Whether I’m in the mood for a gripping drama, a classic noir, or an under-the-radar foreign film, I know I’ll find something worthwhile."
                 />
<br/>
                 <Reviews
 person="Philip Mitchell, 25, logistics worker"
 review="Mayback Movies is my go-to site when I actually want to find a good movie instead of wasting time scrolling through the same stuff on other streaming services. They don’t just have movies—you also get solid reviews, cool recommendations, and deep dives into films you might’ve never considered watching."
                 />
        </>
    );
};

export default About;