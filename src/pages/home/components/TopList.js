import TopItem from './TopItem';

const TopList = ({ title, list }) => {

    return (
        <div className="ps-top-categories">
            <br />
            <div className="container-fluid my-4 mx-4">

                <h3 className='my-4'>{title}</h3>

                <div className="row">
                    {
                        list.map(item=><TopItem
                            key={item.id}
                            name={item.name}
                            img={item.image.image}
                        />)
                    }
                    

                </div>
            </div>

        </div>
    );
}

export default TopList;