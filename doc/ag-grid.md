## Events

## OnBodyScroll Event
onBodyScroll = (
    event: BodyScrollEvent<TData>
) => void;

interface BodyScrollEvent<TData = any, TContext = any> {
  direction: ScrollDirection;
  left: number;
  top: number;
  // The grid api. 
  api: GridApi<TData>;
  // Application context as set on `gridOptions.context`. 
  context: TContext;
  // Event identifier 
  type: T;
}

type ScrollDirection = 
      'horizontal' 
    | 'vertical'