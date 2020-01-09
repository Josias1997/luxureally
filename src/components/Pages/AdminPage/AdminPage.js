import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../../Admin/LoginPage/LoginPage';
import Dashboard from '../../Admin/Dashboard/Dashboard';
import Sidebar from "../../Admin/Sidebar/Sidebar";
import { connect } from 'react-redux';
import { fetch } from './../../../store/actions/admin';
import DataTable from "../../Admin/DataTable/DataTable";

const AdminPage = props => {
    useEffect(() => {
        props.onFetch('/user/');
        props.onFetch('/restaurant/');
        props.onFetch('/order/');
        props.onFetch('/category/');
        props.onFetch('/food/');
        props.onFetch('/table/');
        props.onFetch('/addition/');
        props.onFetch('/delivery/');
    }, []);
    return (
        <>
            <DataTable data={props.orders} type={"orders"}/>
            <DataTable data={props.restaurants} type={"restaurants"} />
            <DataTable data={props.tables} type={"tables"} />
            <DataTable data={props.users} type={"users"} />
            <DataTable data={props.categories} type={"categories"} />
            <DataTable data={props.foods} type={"foods"} />
            <DataTable data={props.additions} type={"additions"} />
        </>
    )
};

const mapStateToProps = state => {
    return {
        users: state.admin.users,
        orders: state.admin.orders,
        restaurants: state.admin.restaurants,
        tables: state.admin.tables,
        additions: state.admin.additions,
        foods: state.admin.foods,
        categories: state.admin.categories,
        deliveries: state.admin.deliveries,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetch: url => dispatch(fetch(url)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);