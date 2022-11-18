import React from "react";
import Lodash from "lodash";

export interface GoodListData {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export interface GoodListState {
  keywords: string;
  onlyShowStock: boolean;
}

export interface GoodListFilterState extends GoodListState {
  onFilterChange: (arg: GoodListState) => void;
}

export class GoodList extends React.Component<
  { list: GoodListData[] },
  GoodListState
> {
  state: GoodListState = { keywords: "", onlyShowStock: false };

  onStateChange = (args: GoodListState) => {
    this.setState(args);
  };

  render() {
    const data = this.props.list.filter((value) => {
      if (this.state.onlyShowStock) {
        return (
          value.stocked === true && value.name.indexOf(this.state.keywords) > -1
        );
      } else {
        return value.name.indexOf(this.state.keywords) > -1;
      }
    });
    const group = Lodash.groupBy(data, "category");
    var elems: React.ReactNode[] = [];
    for (const iterator in group) {
      let elem = GoodListHeader(iterator);
      elems.push(elem);
      let tr = group[iterator].map((value) => {
        return GoodListRow(value);
      });
      elems.push(tr);
    }
    return (
      <div
        style={{
          border: "2",
          borderColor: "red",
          paddingLeft: 2,
        }}>
        <GoodListFilter {...this.state} onFilterChange={this.onStateChange} />
        <table style={{ textAlign: "center", verticalAlign: "center" }}>
          <thead>
            <tr>
              <th key={"name"}>name</th>
              <th key={"price"}>price</th>
            </tr>
          </thead>
          <tbody>{elems}</tbody>
        </table>
      </div>
    );
  }
}

class GoodListFilter extends React.Component<GoodListFilterState> {
  onFilterTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onFilterChange({
      keywords: event.currentTarget.value,
      onlyShowStock: this.props.onlyShowStock,
    });
  };

  onFilterCheckedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onFilterChange({
      keywords: this.props.keywords,
      onlyShowStock: event.currentTarget.checked,
    });
  };

  render(): React.ReactNode {
    return (
      <div>
        <input
          type="text"
          value={this.props.keywords}
          onChange={this.onFilterTextChange}
          placeholder="search"
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="onlyShowStock"
            checked={this.props.onlyShowStock}
            onChange={this.onFilterCheckedChange}
          />
          Only show products in stock
        </label>
      </div>
    );
  }
}

function GoodListHeader(props: string) {
  return (
    <tr key={props}>
      <th colSpan={2}>{props}</th>
    </tr>
  );
}

function GoodListRow(props: GoodListData): React.ReactNode {
  const color = !props.stocked ? "red" : "black";
  return (
    <tr key={props.name}>
      <td style={{ color: color }}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}

export const GoodListDataList: GoodListData[] = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];
