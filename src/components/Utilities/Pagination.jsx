const Pagination = ({ page, setPage, lastPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNext = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrev = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

     return(
        <div className="flex justify-center items-center gap-4 py-4 px-2 font-semibold text-lg text-primary">
            { page <= 1 ? null :
                <button className="transition-all hover:text-accent" onClick={handlePrev}>Prev</button>
            }
            <p>{page} of {lastPage}</p>
            { page >= lastPage ? null :
                <button className="transition-all hover:text-accent" onClick={handleNext}>Next</button>
            }
        </div>
     )
}

export default Pagination