import React, { Component } from 'react';
import { Button, Text, TextInput , View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimpleSurvey } from 'react-native-simple-survey';
import {COLORS} from '../../constants'
import styles from './style'

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'whites';

const survey = [
    {
        questionType: 'Info',
        questionText: 'Welcome2 to the React Native Simple Survey Example app! Tap next to continue'
    },
    {
        questionType: 'TextInput',
        questionText: 'Simple Survey supports free form text input.\n\nWhat is your favorite color?',
        questionId: 'favoriteColor',
        placeholderText: 'Tell me your favorite color!',
    },
    {
        questionType: 'NumericInput',
        questionText: 'It also supports numeric input. Enter your favorite number here!',
        questionId: 'favoriteNumber',
        placeholderText: '42',
    },
    {
        questionType: 'NumericInput',
        questionText: 'New to 3.0, default values!\n\nHow many balls can you juggle at once?',
        questionId: 'jugglingBalls',
        defaultValue: '0'
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Naturally Simple Survey also has multiple choice questions. By default they acts like checkboxes, answers can be selected and deselected.\n\nWhat is your favorite pet?',
        questionId: 'favoritePet',
        options: [
            {
                optionText: 'Dogs',
                value: 'dog'
            },
            {
                optionText: 'Cats',
                value: 'cat'
            },
            {
                optionText: 'Ferrets',
                value: 'ferret'
            },
            {
                optionText: 'Snakes',
                value: 'snake'
            },
            {
                optionText: 'Guinea pigs',
                value: 'guinea'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Select two or three of your favorite foods!',
        questionId: 'favoriteFoods',
        questionSettings: {
            maxMultiSelect: 3,
            minMultiSelect: 2,
        },
        options: [
            {
                optionText: 'Sticky rice dumplings',
                value: 'sticky rice dumplings'
            },
            {
                optionText: 'Pad Thai',
                value: 'pad thai'
            },
            {
                optionText: 'Steak and Eggs',
                value: 'steak and eggs'
            },
            {
                optionText: 'Tofu',
                value: 'tofu'
            },
            {
                optionText: 'Ice cream!',
                value: 'ice cream'
            },
            {
                optionText: 'Injera',
                value: 'injera'
            },
            {
                optionText: 'Biryani',
                value: 'biryani'
            },
            {
                optionText: 'Tamales',
                value: 'tamales'
            },
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Simple Survey can auto advance after a question has been answered. Select two things you do to relax:',
        questionId: 'relax',
        questionSettings: {
            maxMultiSelect: 2,
            minMultiSelect: 2,
            autoAdvance: true,
        },
        options: [
            {
                optionText: 'Reading a good book',
                value: 'reading'
            },
            {
                optionText: 'Going on vacation',
                value: 'vacations'
            },
            {
                optionText: 'Eating meals with family',
                value: 'meals'
            },
            {
                optionText: 'Heading to the ocean',
                value: 'ocean'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Simple Survey can also simulate radio button behavior. Pick from below: ',
        questionId: 'radio',
        questionSettings: {
            allowDeselect: false,
        },
        options: [
            {
                optionText: 'I was forced to pick option 1',
                value: 'option 1'
            },
            {
                optionText: 'I have to pick option 2',
                value: 'option 2'
            },
            {
                optionText: 'I guess option 3',
                value: 'option 3'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Simple Survey also supports default selections: ',
        questionId: 'singleDefault',
        questionSettings: {
            defaultSelection: 0
        },
        options: [
            {
                optionText: 'This is the default option',
                value: 'default'
            },
            {
                optionText: 'This is the alternative option',
                value: 'alternative'
            },
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'And of course it supports multiple defaults: ',
        questionId: 'multipleDefaults',
        questionSettings: {
            defaultSelection: [0, 2],
            maxMultiSelect: 2,
            minMultiSelect: 2,
        },
        options: [
            {
                optionText: 'This is the first default option',
                value: 'first default'
            },
            {
                optionText: 'This is the first alternate option',
                value: 'first alternative'
            },
            {
                optionText: 'This is the second default option',
                value: 'second default'
            },
            {
                optionText: 'This is the second alternate option',
                value: 'second alternative'
            },
        ]
    },
    {
        questionType: 'Info',
        questionText: 'That is all for the demo, tap finish to see your results!'
    },
];

export default class Survey extends Component{
    constructor(props) {
        super(props);
        this.state = { backgroundColor: PURPLE, answersSoFar: '' };
    }

    onSurveyFinished(answers) {
        const infoQuestionsRemoved = [...answers];
        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }
        
        // this.props.navigation.navigate('SurveyCompleted', { surveyAnswers: answersAsObj });
    }

    onAnswerSubmitted(answer) {
        this.setState({ answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2) });
        switch (answer.questionId) {
            case 'favoriteColor': {
                if (COLORS.includes(answer.value.toLowerCase())) {
                    this.setState({ backgroundColor: answer.value.toLowerCase() });
                }
                break;
            }
            default:
                break;
        }
    }

    renderPreviousButton(onPress, enabled) {
        return (
            // <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
            //     <Button
            //          color={GREEN}
            //         onPress={onPress}
            //         disabled={!enabled}
            //         backgroundColor={GREEN}
            //         title={'Previous'}
            //     />
            // </View>
            <TouchableOpacity  onPress={onPress}
            disabled={!enabled} style={styles.buttonStyle}>
                <Text style={{color:'white'}}>Previous</Text>
            </TouchableOpacity>
        );
    }

    renderNextButton(onPress, enabled) {
        return (
            <TouchableOpacity  onPress={onPress}
            disabled={!enabled} style={styles.buttonStyle}>
                <Text style={{color:'white'}}>Next</Text>
            </TouchableOpacity>
        );
    }

    renderFinishedButton(onPress, enabled) {
        return (
            // <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
            //     <Button
            //         title={'Finished'}
            //         onPress={onPress}
            //         disabled={!enabled}
            //         color={GREEN}
            //     />
            // </View>
            <TouchableOpacity  onPress={onPress}
            disabled={!enabled} style={styles.buttonStyle}>
                <Text style={{color:'white'}}>Finished</Text>
            </TouchableOpacity>
        );
    }

    renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    color={isSelected ? GREEN : PURPLE}
                    style={isSelected ? { fontWeight: 'bold' } : {}} 
                    key={`button_${index}`}
                />
            </View>
        );
    }

    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={1} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }

    renderTextBox(onChange, value, placeholder, onBlur) {
        return (
            <View>
                <TextInput
                    style={styles.textBox}
                    onChangeText={text => onChange(text)}
                    numberOfLines={1}
                    underlineColorAndroid={'white'}
                    placeholder={placeholder}
                    placeholderTextColor={'rgba(184,184,184,1)'}
                    value={value}
                    multiline
                    onBlur={onBlur}
                    blurOnSubmit
                    returnKeyType='done'
                />
            </View>
        );
    }

    renderNumericInput(onChange, value, placeholder, onBlur) {
        return (<TextInput 
            style={styles.numericInput}
            onChangeText={text => { onChange(text); }}
            underlineColorAndroid={'white'}
            placeholderTextColor={'rgba(184,184,184,1)'}
            value={String(value)}
            placeholder={placeholder}
            keyboardType={'numeric'}
            onBlur={onBlur}
            maxLength={3}
        />);
    }
    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={[styles.background, { backgroundColor: "white" }]}>
                <View style={styles.container}>
                    <SimpleSurvey
                        ref={(s) => { this.surveyRef = s; }}
                        survey={survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        selectionGroupContainerStyle={styles.selectionGroupContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPreviousButton.bind(this)}
                        renderNext={this.renderNextButton.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}
                        renderQuestionText={this.renderQuestionText}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
                        renderTextInput={this.renderTextBox}
                        renderNumericInput={this.renderNumericInput}
                        renderInfo={this.renderInfoText}
                    />
                    
                </View>
                
                {/* <ScrollView style={styles.answersContainer}>
                    <Text style={{textAlign:'center'}}>JSON output</Text>
                    <Text>{this.state.answersSoFar}</Text>
                </ScrollView> */}
                
            </View>
        );
    }
}