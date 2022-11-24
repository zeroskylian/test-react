import React from "react";

/** dummy child components that take anything */
const Comment = (arg: any) => <div>{arg}</div>;
const TextBlock = Comment;

/** dummy Data */
type CommentType = { text: string; id: number };
const comments: CommentType[] = [
  {
    text: "comment1",
    id: 1,
  },
  {
    text: "comment2",
    id: 2,
  },
];
const blog = "blogpost";

/** mock data source */
const DataSource = {
  addChangeListener(e: Function) {
    // do something
  },
  removeChangeListener(e: Function) {
    // do something
  },
  getComments() {
    return comments;
  },
  getBlogPost(id: number) {
    return blog;
  },
};
/** type aliases just to deduplicate */
type DataType = typeof DataSource;

/** Rewritten Components from the React docs that just uses injected data prop */
function CommentList({ data }: WithDataProps<typeof comments>) {
  return (
    <div>
      {data.map((comment: CommentType) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}
interface BlogPostProps extends WithDataProps<string> {
  id: number;
}
function BlogPost({ data, id }: BlogPostProps) {
  return (
    <div key={id}>
      <TextBlock text={data} />;
    </div>
  );
}

// these are the props to be injected by the HOC
interface WithDataProps<T> {
  data: T; // data is generic
}
// T is the type of data
// P is the props of the wrapped component that is inferred
// C is the actual interface of the wrapped component (used to grab defaultProps from it)
export function withSubscription<T, P extends WithDataProps<T>, C = {}>(
  // this type allows us to infer P, but grab the type of WrappedComponent separately without it interfering with the inference of P
  WrappedComponent: React.JSXElementConstructor<P> & C,
  // selectData is a functor for T
  // props is Readonly because it's readonly inside of the class
  selectData: (
    dataSource: typeof DataSource,
    props: Readonly<JSX.LibraryManagedAttributes<C, Omit<P, "data">>>
  ) => T
) {
  // the magic is here: JSX.LibraryManagedAttributes will take the type of WrapedComponent and resolve its default props
  // against the props of WithData, which is just the original P type with 'data' removed from its requirements
  type Props = JSX.LibraryManagedAttributes<C, Omit<P, "data">>;
  type State = {
    data: T;
  };
  return class WithData extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props),
      };
    }

    componentDidMount = () => DataSource.addChangeListener(this.handleChange);

    componentWillUnmount = () =>
      DataSource.removeChangeListener(this.handleChange);

    handleChange = () =>
      this.setState({
        data: selectData(DataSource, this.props),
      });

    render() {
      // the typing for spreading this.props is... very complex. best way right now is to just type it as any
      // data will still be typechecked
      return (
        <WrappedComponent data={this.state.data} {...(this.props as any)} />
      );
    }
  };
  // return WithData;
}

/** HOC usage with Components */
export const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource: DataType) => DataSource.getComments()
);

export const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource: DataType, props: Omit<BlogPostProps, "data">) =>
    DataSource.getBlogPost(props.id)
);
