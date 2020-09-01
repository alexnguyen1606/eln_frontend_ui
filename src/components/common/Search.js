import React from 'react'

function Search(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitSearch();
    }

    return (

        <div className=" col-md-9 pt-4 pb-4 breadcrumb">
            <form className="form-group col-md-12 d-flex" onSubmit={handleSubmit}>
                <input type="text" onChange={e => props.changeDataSearch(e.target.value)} className="form-control col-md-8" name="name" id="" placeholder="Tên khóa học" />
                <button type="submit" className="form-control col-md-3 btn btn-success ml-auto">Tìm kiếm</button>
            </form>

        </div>

    )
}

export default Search
