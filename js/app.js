function vueApp() {
    var vm = new Vue({
        el: '#appContainer',
        data: {
            tags: "Select a tag group to see individual tags",
            generated: '',
            validateCustomInput: 'Any regex pattern can be used for custom input validation',
            groupInputCounter:  2
        },
        methods: {
            generateReferenceName : function(){
                var trimReference = this.$els.referencename.value.replace(/\s/g, '');
                this.generated = trimReference ? trimReference + '_generated_ref' : '';
            },
            populateTags: function(event){
                this.tags = event.currentTarget.value + " Tags";
            },
            chooseGroup: function(){
                this.groupInputCounter = this.groupInputCounter + 1;
            },
            onFilterTypes: function(){
            },
            onSave: function(event){
                var dateReg = /^\d{2}([./-])\d{2}\1\d{4}$/;
                this.validateCustomInput = this.$els.customvalidation.value.match(dateReg);
            },
            onCancel: function(){
                this.$els.customvalidation.value = '';
                this.$els.referencename.value = '';
                this.$els.defaultvalue.value = '';
                this.generated = '';
                this.tags = "Select a tag group to see individual tags";
            },
            onDelete: function(){
            }

        }

    })
}
window.onload = vueApp;