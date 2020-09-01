import React, { Component, useState, Fragment, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
function Paging(props) {
    const handlePageClick = (e) => {

        props.handlePageClick(e);
    }

    return (

        <div className="col-md-12 mt-3">
            <ReactPaginate
                containerClassName="container row list-unstyled "
                pageClassName="  item-page"
                forcePage={props.activePage}
                initialPage={props.activePage}
                breakLinkClassName="active"
                activeLinkClassNam="active"
                pageCount={props.totalPage}
                pageRangeDisplayed={5}
                marginPagesDisplayed={3}
                previousLabel="Trước"
                nextLabel="Sau"
                onPageChange={handlePageClick}
            />
        </div>
    )
}

export default Paging
