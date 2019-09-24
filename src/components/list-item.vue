<template>
    <li>
        <button type="button" aria-labelledby="elementId" aria-describedby="dragDropHelpId"><slot name="button-content"></slot></button>
        <slot name="list-content"  :id="elementId" >
        </slot>
    </li>
</template>
<script>
let id = 0
export default {
    props: {
        name: {
            type: String,
            default: 'list-element',
            validator: function(value) {
               return /$[\w-.]+$/.test(value)
            }
        },
        
        dragDropHelpId: {
            type: String,
            required: true,
            validator: function(value) {
                return /$[\w-.]+$/.test(value)
            }
        }
    },
    data() {
        return {
            idNum: ++id,
        }
    },
    computed: {
        elementId() {
            return `${this.name}-${this.idNum}` 
        }
    },
}
</script>