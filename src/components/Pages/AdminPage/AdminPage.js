import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../../Admin/LoginPage/LoginPage';
import Dashboard from '../../Admin/Dashboard/Dashboard';
import { connect } from 'react-redux';
import { fetch } from './../../../store/actions/admin';

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
    }, [])
    return (
       <div>Admin Page
       {
           props.orders.map(order => (
               <div key={order.id}>{order.total_price}</div>
            ))
       }
       {
           props.restaurants.map(restaurant => (
            <div key={restaurant.id}>{restaurant.name}</div>
            ))
       }
        {
           props.categories.map(category => (
            <div key={category.id}>{category.title}</div>
            ))
       }
        {
           props.tables.map(table => (
            <div key={table.id}>{table.number}</div>
            ))
       }
       </div>
    )
};

const mapStateToProps = state => {
    return {
        users: state.admin.users,
        orders: state.admin.orders,
        restaurants: state.admin.restaurants,
        tables: state.admin.tables,
        additions: state.admin.addition,
        foods: state.admin.foods,
        categories: state.admin.categories,
        deliveries: state.admin.deliveries,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetch: url => dispatch(fetch(url)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);