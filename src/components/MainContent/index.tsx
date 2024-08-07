

interface MainContentProps {
    activitiesList: Array<string>;
}


const MainContent = ({activitiesList}:MainContentProps) => {
    return (
        <div>
          {activitiesList.map((item, index)=> <p key={index}>{item}</p>)}
        </div>
    )
};

export default MainContent
