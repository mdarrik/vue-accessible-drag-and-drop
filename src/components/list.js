export const List = {
    props: {
        listType:{validator: function(value) {
            return ['ul', 'ol', 'dl'].indexOf(value) !== -1
        }, default: 'ul' },
    },
    render() {
        const listElement = this.listType
        return (
          <listElement>
              {this.$slots.default}
          </listElement>  
        )
    }
}

export default List