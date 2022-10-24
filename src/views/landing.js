import TestRender from "../Components/TestRender";
import CreateTest from '../Components/CreateTest';

function Landing(props) {
    
    return (
        <div>
            
            OK cisto da vidis, stavljam na main page, budes ga nasao xD
            Dakle ideja je da componenti ne idu direktno u app nego od njih slazes vieowe/screenove, ti screenovi idu u views folder i onda tek u app, to je nekakav standard za MVC applikacije. Ako tebi tutorial za react kaze nesto drugo da se radi sa reactom budemo tako ali ces mi onda morati to objesniti.
            Baza je kinda postavljena, jos ne radi nis previse korisno, morat ces to preko xamppa srediti, to se sve lako napravi, na cu napraviti sql script koj to sredi sve, budemo na kavi sve dogovorili.
            <br/>
            Kada radis front, probaj resizeati screen, stvari se squishaju, to treba prek cssa pofixati
            <TestRender/>
            <CreateTest/>
        </div>
    );
}

export default Landing;