import React from "react";
import MaterialTable from "material-table";
import { connect } from 'react-redux';

const TableList = props => {
  const {pathname} = props.location;
  let data = [];
  switch(pathname) {
      case '/admin/users':
          data = props.users;
          break;
      case '/admin/categories':
          data = props.categories;
          break;
      case '/admin/deliveries':
          data = props.deliveries;
          break;
      case '/admin/foods':
          data = props.foods;
          break;
      case '/admin/orders':
          data = props.orders;
          break;
      case '/admin/restaurants':
          data = props.restaurants;
          break;
      case '/admin/tables':
          data = props.tables;
          break;
      case '/admin/additions':
          data = props.additions;
          break;
      default:
          break;
  }
  const columns = Object.keys(data[0]).map(key => {
      return  {
          title: key,
          field: key
      }
  });
  return (
    <MaterialTable columns={columns} data={data.reverse()}
                   options={{
                       sorting: true,
                       filtering: true,
                       search: true,
                       selection: true,
                   }}
                   editable={{
        onRowAdd: newData =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    {
                        /* const data = this.state.data;
                        data.push(newData);
                        this.setState({ data }, () => resolve()); */
                    }
                    resolve();
                }, 1000);
            }),
        onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    {
                        /* const data = this.state.data;
                        const index = data.indexOf(oldData);
                        data[index] = newData;
                        this.setState({ data }, () => resolve()); */
                    }
                    resolve();
                }, 1000);
            }),
        onRowDelete: oldData =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    {
                        /* let data = this.state.data;
                        const index = data.indexOf(oldData);
                        data.splice(index, 1);
                        this.setState({ data }, () => resolve()); */
                    }
                    resolve();
                }, 1000);
            })
    }}/>
  );
};

const mapStateToProps = state => {
    return {
        users: state.admin.users,
        categories: state.admin.categories,
        deliveries: state.admin.deliveries,
        additions: state.admin.additions,
        foods: state.admin.foods,
        orders: state.admin.orders,
        tables: state.admin.tables,
        restaurants: state.admin.restaurants,
    }
};

export default connect(mapStateToProps)(TableList);
